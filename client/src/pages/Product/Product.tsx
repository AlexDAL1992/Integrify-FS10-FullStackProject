import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import { addToCart } from "../../redux/reducers/cart";
import { deleteProduct } from "../../redux/reducers/product";
import Can from "../../components/Can";
import "./product.scss";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state: any) => state.cart);
  const role = useSelector((state: any) => state.user.user.role);
  const products = useSelector((state: any) => state.product);
  const product = products.find((p: any) => p.id === id);

  return (
    <div className="product-page background text">
      {!product && (
        <div>
          <h2>Product is not found!</h2>
        </div>
      )}

      {product && (
        <div className="product-page__detail">
          <img src={product.img} alt={product.name} />
          <h2>{product.name}</h2>
          <h3>Description: {product.description}</h3>
          <h3>Categories: {product.categories.join(", ")}</h3>
          <h3>Variants: {product.variants.join(", ")}</h3>
          <h3>Sizes: {product.sizes.join(", ")}</h3>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => dispatch(addToCart(product))}
            disabled={cart.includes(product)}
          >
            ADD TO CART
          </Button>

          <Can
            role={role}
            perform="product:edit"
            yes={() => (
              <div>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={() => {
                    navigate(`/form/products/${product.id}`);
                  }}
                >
                  UPDATE THIS PRODUCT
                </Button>
              </div>
            )}
            no={() => <div></div>}
          />

          <Can
            role={role}
            perform="product:delete"
            yes={() => (
              <div>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={() => dispatch(deleteProduct(product.id) as any)}
                >
                  DELETE THIS PRODUCT
                </Button>
              </div>
            )}
            no={() => <div></div>}
          />
        </div>
      )}
      <Button
        variant="outlined"
        color="inherit"
        onClick={() => {
          navigate("/");
        }}
      >
        BACK TO HOME
      </Button>
    </div>
  );
};

export default Product;
