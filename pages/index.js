import Collection from '@/components/Collection';
import FinalBlock from '@/components/FinalBlock';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import ProductItem from '@/components/ProductItem';

import { Store } from '@/ultis/Store';

import supabase from '@/ultis/supabaseClient';
import { useContext, useEffect, useState } from 'react';

export default function Home() {
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
      <>
        <Hero />
      </>
      <div className="flex items-center justify-center">
        <h2 className="mt-10 mb-10 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Top Trending Product
        </h2>
      </div>
      <>
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
        <div className="my-20">
          <Collection />
        </div>
        <div className="my-20">
          <FinalBlock />
        </div>
      </>
    </Layout>
  );
}
