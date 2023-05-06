import '@/styles/globals.css';
import { StoreProvider } from '@/ultis/Store';
import supabase from '@/ultis/supabaseClient';

import { SessionContextProvider } from '@supabase/auth-helpers-react';

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}>
        {' '}
        <Component {...pageProps} />
      </SessionContextProvider>
    </StoreProvider>
  );
}
