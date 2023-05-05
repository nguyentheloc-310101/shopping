import ProductItem from '@/components/ProductItem';
import Layout from '@/components/layout';
import data from '@/ultis/data';

export default function Home() {
  return (
    <Layout title="home">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem
            product={product}
            key={product.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}
