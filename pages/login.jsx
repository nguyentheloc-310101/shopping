import Layout from '@/components/Layout';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect } from 'react';
import { router } from 'next/router';

export default function LoginScreen() {
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
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={[]}
        />
      </div>
    </Layout>
  );
}
