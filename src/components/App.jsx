import { Home } from 'pages/Home';
import { About } from 'pages/About';
import { Products } from 'pages/Products';
import { Route, Routes } from 'react-router-dom';
import { StyledLink } from './App.styled';

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route
          path="products/:productsId"
          element={<div>ProductsDetails</div>}
        />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
};
