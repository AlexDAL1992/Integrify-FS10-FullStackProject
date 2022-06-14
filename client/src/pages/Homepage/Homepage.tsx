import React from "react";

import ProductList from "../../components/ProductList/ProductList";
import "./homepage.scss";

const Homepage = () => {
  return (
    <div>
      <ProductList />

      {/* <Can
        role={role}
        perform="products:get"
        yes={() => (
          <Button variant="contained" onClick={getProducts}>
            GET ALL PRODUCTS
          </Button>
        )}
        no={() => <p>PERMISSION DENIED!</p>}
      /> */}
    </div>
  );
};

export default Homepage;
