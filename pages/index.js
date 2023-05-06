import Layout from '@/components/Layout';
import ProductItem from '@/components/ProductItem';
import { Store } from '@/ultis/Store';

import supabase from '@/ultis/supabaseClient';
import { useContext, useEffect, useState } from 'react';

export default function Home() {
  console.log(supabase);
  const [fetchError, setFetchError] = useState(null);
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('products_supa').select();
      if (error) {
        setFetchError('Could not fetch product data');
        setProductList(null);
        console.log(error);
      }
      if (data) {
        setProductList(data);
        setFetchError(null);
      }
    };
    fetchData();
  }, []);
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (product) => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await supabase.from('products_supa').select();

    if (data.countInStock < quantity) {
      return alert('Sorry. Product is out of stock');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  };
  return (
    <Layout title="home">
      {fetchError && <p>{fetchError}</p>}
      {productList && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {productList.map((product) => (
            <ProductItem
              product={product}
              key={product.slug}
              addToCartHandler={addToCartHandler}></ProductItem>
          ))}
        </div>
      )}
    </Layout>
  );
}
