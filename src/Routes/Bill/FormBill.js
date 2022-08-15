
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import TextFieldForm from "../../components/FormComponents/TextFieldForm";
import SelectForm from "../../components/FormComponents/SelectForm";
import CustomCard from "../../components/global/CustomCard";
import styles from "./bill.module.scss"
import { useDispatch } from "react-redux";
import DatePickerForm from "../../components/FormComponents/DatePickerForm";


function FormBill() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch((data));
  };
  return (
     <div className={styles.formBill}>
    <div>
      <CustomCard>
        <h1>Crear factura</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={12}>
              <TextFieldForm
                control={control}
                name="codeBill"
                label="Codigo de factura"
                id="codeBill"
                inputProps={{ maxLength: 100 }}  
                required
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <DatePickerForm
                control={control}
                name="date"
                label="fecha"
                id="date"
                inputProps={{ maxLength: 100 }}  
                required
              />
            </Grid>
             <Grid item xs={12} md={12}>
              <Button variant="contained" type="submit">
                Nuevo cliente
              </Button>
              <Button variant="contained" type="submit">
                Clientes
                </Button>
            </Grid>
            <Grid item xs={6} md={12}>
              <TextFieldForm
                control={control}
                name="phone"
                label="Codigo"
                id="phone"
                onInput = {(e) =>{
                  e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,15)
              }}
                required
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <TextFieldForm
                control={control}
                name="email"
                label="E-mail"
                id="email"
                inputProps={{ maxLength: 100 }}  
                required
              />
            </Grid>
        
            <Grid item xs={12} md={6}>
              <SelectForm
                control={control}
                name="nit"
                label="N.I.T'"
                id="nit"
                required
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <DatePickerForm
                control={control}
                name="date"
                label="fecha"
                id="date"
                inputProps={{ maxLength: 100 }}  
                required
              />
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

export default FormBill