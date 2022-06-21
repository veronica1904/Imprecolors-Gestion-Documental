
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import TextFieldForm from "../../components/FormComponents/TextFieldForm";
import SelectForm from "../../components/FormComponents/SelectForm";
import CustomCard from "../../components/global/CustomCard";
import styles from "./product.module.scss"
import { useDispatch } from "react-redux";
import CustomImg from "../../components/global/CustomImg";


function RegisterProducts() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    // dispatch((data));
    console.log(data)
  };
  return (
     <div className={styles.formProduct}>
    <div>
      <CustomCard>
        <h1>Ingresar producto</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={12}>
              <TextFieldForm
                control={control}
                name="code"
                label="Codigo"
                id="code"
                required
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <TextFieldForm
                control={control}
                name="description"
                label="Descripciòn"
                id="description"
                required
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <TextFieldForm
                control={control}
                name="provider"
                label="Provedor"
                id="provider"
                required
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <TextFieldForm
                control={control}
                name="price"
                label="Precio"
                id="price"
                type ="number"
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextFieldForm
                control={control}
                name="input quantity"
                label="Costo de entrada"
                id="input quantity"
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextFieldForm
                control={control}
                name="iva"
                label="iva"
                id="iva"
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomImg/>
            </Grid>
            <Grid item xs={12} md={12}>
              <Button variant="contained" type="submit">
                Registrar 
              </Button>
            </Grid>
          </Grid>
        </form>
      </CustomCard>
    </div>
    </div>
  );
}

export default RegisterProducts