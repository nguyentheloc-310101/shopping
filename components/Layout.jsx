import Head from 'next/head';

import React, { useContext, useState, useEffect } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Footer from './Footer';
import { Store } from '@/ultis/Store';
import Link from 'next/link';
import Cookies from 'js-cookie';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';

const Layout = ({ title, children }) => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const session = useSession();
  const supabase = useSupabaseClient();
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log({ error });
    }
  }
  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut();
  };

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  /* The List Item of navigation bar*/
  const [openNav, setOpenNav] = React.useState(false);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // const router = useRouter();

  return (
    <>
      <Head>
        <title> {title ? title + ' - shopping' : 'shopping'}</title>
      </Head>
      <div className="w-full flex min-h-screen flex-col justify-between ">
        <header>
          <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-900">
              <Typography className="mr-4 cursor-pointer py-1.5 font-bold">
                <Link href="/">Shopping</Link>
              </Typography>
              <div className="flex items-center gap-4">
                <div className="mr-4 hidden lg:block">
                  <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-normal">
                    <Link
                      href="/cart"
                      className="flex items-center">
                      Cart
                      {cartItemsCount > 0 && (
                        <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                          {cartItemsCount}
                        </span>
                      )}
                    </Link>
                  </Typography>
                </div>
                {!session ? (
                  <Link href="/login">
                    <Button
                      variant="gradient"
                      size="sm"
                      className="hidden lg:inline-block">
                      <span>Log In</span>
                    </Button>
                  </Link>
                ) : (
                  <Link href="/login">
                    <Button
                      variant="gradient"
                      onClick={logoutClickHandler}
                      className="hidden lg:inline-block">
                      <span>Log Out</span>
                    </Button>
                  </Link>
                )}

                <IconButton
                  variant="text"
                  className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                  ripple={false}
                  onClick={() => setOpenNav(!openNav)}>
                  {openNav ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </IconButton>
              </div>
            </div>
            <MobileNav open={openNav}>
              <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal">
                <Link
                  href="/cart"
                  className="flex items-center">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </Link>
              </Typography>
              <Button
                variant="gradient"
                size="sm"
                fullWidth
                className="mb-2">
                <span>Log In</span>
              </Button>
            </MobileNav>
          </Navbar>
        </header>
        <main>{children}</main>
        {session ? <Footer /> : ''}
      </div>
    </>
  );
};

export default Layout;
