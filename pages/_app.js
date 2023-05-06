import '@/styles/globals.css';
import { StoreProvider } from '@/ultis/Store';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
