import { ProductList } from '../components/ProductList';
import { getProducts } from '../fakeAPI';

export const Products = () => {
  const products = getProducts();
  console.log(products);
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};
