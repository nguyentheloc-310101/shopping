import Layout from '@/components/Layout';
import supabase from '@/ultis/supabaseClient';
import {
  Card,
  Input,
  Button,
  Typography,
  Alert,
} from '@material-tailwind/react';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);
  async function signUp() {
    if (!email) return;
    const { error, data } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.log({ error });
      alert('check');
    } else {
      setSubmitted(true);
    }
  }
  return (
    <Layout title="Login">
      {!submitted ? (
        <Alert>Please check your email to sign in</Alert>
      ) : (
        <div className="mx-auto flex items-center justify-center">
          <Card
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
                  onChange={(e) => setEmail(e.target.value)}
                  size="lg"
                  label="Email"
                />
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  size="lg"
                  label="Password"
                />
              </div>

              <Button
                onClick={() => signUp()}
                className="mt-6"
                fullWidth>
                Log In
              </Button>
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
          </Card>
        </div>
      )}
    </Layout>
  );
}
