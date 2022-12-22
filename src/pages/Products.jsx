import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox';
import { ProductList } from '../components/ProductList';
import { getProducts } from '../fakeAPI';

export const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';
  const visibleProducts = products.filter(product =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );

  const updateQuerryString = name => {
    const nextParams = name !== '' ? { name } : {};
  };
  return (
    <main>
      <SearchBox value={productName} onChange={updateQuerryString} />
      <ProductList products={visibleProducts} />
    </main>
  );
};
