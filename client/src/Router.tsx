import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import User from "./pages/User/User";
import Product from "./pages/Product/Product";
import Form from "./pages/Form/Form";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/user/" element={<User />} />
      <Route path="/form" element={<Form />} />
    </Routes>
  );
};

export default Router;
