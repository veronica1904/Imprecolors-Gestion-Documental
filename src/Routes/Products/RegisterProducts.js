
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import TextFieldForm from "../../components/FormComponents/TextFieldForm";
import SelectForm from "../../components/FormComponents/SelectForm";
import CustomCard from "../../components/global/CustomCard";
import styles from "./product.module.scss"
import { useDispatch } from "react-redux";
import CustomImg from "../../components/global/CustomImg";
import { actionRegitsrProduct } from "../../Redux/actions/products";


function RegisterProducts() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
     dispatch(actionRegitsrProduct(data));
    console.log(data)
  };

  const listProvider = [ // esto sera traido de la data del backend por ahora la quemo
    { label: "olimpica", value: "62819d3876119fcb6c99bad7" },
    { label: "Frunas", value: "62819d3876119fcb6c99bad3" },
    { label: "Dukarte", value: "62819d3876119fcb6c99ba56" },
];
  return (
     <div className={styles.formProduct}>
    <div>
      <CustomCard>
        <h1>Ingresar producto</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <TextFieldForm
                control={control}
                name="code"
                label="Codigo"
                id="code"
                inputProps={{ maxLength: 100 }}
                required
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextFieldForm
                control={control}
                name="name"
                label="Nombre del producto"
                id="name"
                inputProps={{ maxLength: 100 }}
                required
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <TextFieldForm
                control={control}
                name="description"
                label="Descripciòn"
                id="description"
                inputProps={{ maxLength: 100 }}
                required
              />
            </Grid>
            <Grid item xs={6} md={12}>
              
               <SelectForm
                options={listProvider}
                control={control}
                
                name="provider"
                label="Provedor"
                id="provider"
                inputProps={{ maxLength: 100 }}  
                required
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextFieldForm
                control={control}
                name="quantity"
                label="Cantidad"
                id="quantity"
                type= "number"
                inputProps={{ maxLength: 100 }}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextFieldForm
                control={control}
                name="cost_center"
                label="Costo de entrada"
                id="cost_center"
                type= "number"
                onInput = {(e) =>{
                  e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,15)
              }}
                required
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextFieldForm
                control={control}
                name="price"
                label="Precio"
                id="price"
                type ="number"
                 onInput = {(e) =>{
                   e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,15)
               }}
                required
              />
            </Grid>
           
            <Grid item xs={12} md={4}>
              <TextFieldForm
                control={control}
                name="iva"
                label="iva"
                id="iva"
                type ="number"
              //   onInput = {(e) =>{
              //     e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,10)
              // }}
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