import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Food from "./components/CategoryPages/Food";
import Nature from "./components/CategoryPages/Nature";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/nature" element={<Nature />} />
          {/* Define routes for other categories... */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    );
  }
  
export default AppRoutes;
