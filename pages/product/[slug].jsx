/*[slug] here is parameter*/
import Layout from '@/components/Layout';

import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { Button, CardBody, Card, CardFooter } from '@material-tailwind/react';
import { Store } from '@/ultis/Store';
import supabase from '@/ultis/supabaseClient';
import Link from 'next/link';

export const ProductScreen = (props) => {
  const { state, dispatch } = useContext(Store);

  const [fetchError, setFetchError] = useState(null);
  const [productList, setProductList] = useState(null);
  const product = props;
  const router = useRouter();

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
  if (!product) {
    return <Layout title="Produt Not Found">Produt Not Found</Layout>;
  }

  const { cart } = state;
  const addToCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await supabase.from('products_supa').select();

    if (data.countInStock < quantity) {
      return alert('Sorry. Product is out of stock');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">back to products</Link>
      </div>
      {fetchError && <p>{fetchError}</p>}
      {productList && (
        <div className="grid md:grid-cols-4 md:gap-3">
          <>
            <div className="md:col-span-2 ">
              <img
                className="ml-4 aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg"
                src={product.image}
                alt={product.name}
                width={640}
                height={640}
                sizes="100vw"
                style={{
                  width: '60%',
                  height: 'auto',
                }}></img>
            </div>
            <div>
              <ul>
                <li>
                  <h1 className="text-lg">{product.name}</h1>
                </li>
                <li>Category: {product.category}</li>
                <li>Brand: {product.brand}</li>

                <li>Description: {product.description}</li>
              </ul>
            </div>
            <div className="px-2">
              <Card className="w-full text-black">
                <CardBody>
                  {' '}
                  <div className="mb-2 flex justify-between">
                    <div>Price</div>
                    <div>${product.price}</div>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <div>Status</div>
                    <div>
                      {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button
                    onClick={addToCartHandler}
                    className=" w-full">
                    Add to cart
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </>
        </div>
      )}
      {/* <div className="py-2">
        <Link href="/">back to products</Link>
      </div> */}
    </Layout>
  );
};
export default ProductScreen;
