import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import User from "./pages/User";
import Product from "./pages/Product";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/users/:id" element={<User />} />
      <Route path="/products/:id" element={<Product />} />
    </Routes>
  );
};

export default Router;
