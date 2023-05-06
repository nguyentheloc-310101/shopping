import Layout from '@/components/Layout';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect } from 'react';
import { router } from 'next/router';
// import supabase from '@/ultis/supabaseClient';
// import { Card, Input, Button, Typography } from '@material-tailwind/react';

// import Link from 'next/link';
// import { useState } from 'react';

export default function LoginScreen() {
  // const [email, setEmail] = useState('');
  // const [submitted, setSubmitted] = useState(false);

  // async function signIn() {
  //   const { error } = await supabase.auth.signInWithPassword({
  //     email,
  //   });
  //   if (error) {
  //     console.log({ error });
  //   } else {
  //     setSubmitted(true);
  //   }
  // }

  // if (submitted) {
  //   return <h1>Please check your email to sign in</h1>;
  // }

  const session = useSession();
  const supabase = useSupabaseClient();
  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session]);
  return (
    <Layout title="Login">
      <div className="mx-auto flex items-center justify-center">
        {/* <Card
          color="transparent"
          shadow={false}
          className="mx-auto ">
          <form className="m2-4 mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <Typography
              variant="h4"
              color="blue-gray">
              Log In
            </Typography>
            <Typography
              color="gray"
              className="mt-1 font-normal">
              Enter your details to Log In.
            </Typography>
            <div className="mb-4 mt-4 flex flex-col gap-6">
              <Input
                // onChange={(e) => setEmail(e.target.value)}
                size="lg"
                label="Email"
              />
              <Input
                type="password"
                size="lg"
                label="Password"
              />
            </div>
            <Link href="/">
              <Button
                // onClick={() => signIn()}
                className="mt-6"
                fullWidth>
                Log In
              </Button>
            </Link>

            <Typography
              color="gray"
              className="mt-4 text-center font-normal">
              Don&apos;t have an account?{' '}
              <Link
                href="register"
                className="font-medium text-blue-500 transition-colors hover:text-blue-700">
                Register
              </Link>
            </Typography>
          </form>
        </Card> */}
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
        />
      </div>
    </Layout>
  );
}
