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
        <Route path="/" element={<div>Home</div>} />
        <Route path="about" element={<div>About</div>} />
        <Route path="products" element={<div>Products</div>} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
};
