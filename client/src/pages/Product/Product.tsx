import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, Navigate } from "react-router-dom";
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
    <div>
      {!product && (
        <div>
          <h2>Product is not found!</h2>
        </div>
      )}

      {product && (
        <div>
          <img src={product.img} alt={product.name} />
          <h2>{product.name}</h2>
          <h3>Description: {product.description}</h3>
          <h3>Categories: {product.categories.join(', ')}</h3>
          <h3>Variants: {product.variants.join(', ')}</h3>
          <h3>Sizes: {product.sizes.join(', ')}</h3>
          <Button
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
                  onClick={() => {navigate(`/form/products/${product.id}`)}}
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
