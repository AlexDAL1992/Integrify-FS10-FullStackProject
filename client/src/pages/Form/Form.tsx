import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Grid, TextField } from "@mui/material";
import { createProduct, Product } from "../../redux/reducers/product";

import Can from "../../components/Can";
import "./form.scss";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state: any) => state.user.user.role);

  const defaultFormValues = {
    name: "",
    description: "",
    categories: "",
    variants: "",
    sizes: "",
  };
  const [formValues, setFormValues] = useState(defaultFormValues);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    const newProduct = {
      name: formValues.name,
      img: "https://i.ibb.co/zhwj93Z/blank.png",
      description: formValues.description,
      categories: ["All", formValues.categories],
      variants: ["All", formValues.variants],
      sizes: ["All", formValues.sizes],
    };

    dispatch(createProduct(newProduct) as any);
    setFormValues(defaultFormValues);
  };

  return (
    <div>
      <Can
        role={role}
        perform="product:post"
        yes={() => (
          <div>
            <h3>CREATE NEW PRODUCT</h3>
            <form onSubmit={handleSubmit}>
              <Grid
                container
                alignItems="center"
                justifyItems="center"
                direction="column"
              >
                <Grid item>
                  <TextField
                    name="name"
                    label="Name:"
                    type="text"
                    value={formValues.name}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    name="description"
                    label="Description:"
                    type="text"
                    value={formValues.description}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    name="categories"
                    label="Categories:"
                    type="text"
                    value={formValues.categories}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    name="variants"
                    label="Variants:"
                    type="text"
                    value={formValues.variants}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    name="sizes"
                    label="Sizes:"
                    type="text"
                    value={formValues.sizes}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
              <Button type="submit">CREATE</Button>
            </form>
          </div>
        )}
        no={() => (
          <div>
            <h3>YOU ARE NOT AUTHORIZED!</h3>
          </div>
        )}
      />
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

export default Form;
