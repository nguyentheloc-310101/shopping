import CheckoutWizard from '@/components/CheckoutWizard';
import Layout from '@/components/Layout';
import React from 'react';

const PlaceOrder = () => {
  return (
    <Layout title="Place Order">
      <CheckoutWizard activeStep={3} />
    </Layout>
  );
};

export default PlaceOrder;
