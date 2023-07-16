import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Category from './pages/Category';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:categoryName" element={<Category />} />
    </Routes>
  );
};

export default AppRoutes;
