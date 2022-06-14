
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import TextFieldForm from "../../components/FormComponents/TextFieldForm";
import CustomCard from "../../components/global/CustomCard";
import styles from './shopping.module.scss';
import { useDispatch } from "react-redux";
import DatePickerForm from "../../components/FormComponents/DatePickerForm";



function FormShopping() {

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
    <div className={styles.formShopping}>
      <div>
        <CustomCard>
          <h1>Registrar compras</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextFieldForm
                  control={control}
                  name="create bill"
                  label="Crear ingreso de factura"
                  id="create bill"
                  required
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <TextFieldForm
                  control={control}
                  name="bill number"
                  label="Nùmero de factura"
                  id="bill number"
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <DatePickerForm
                  control={control}
                  name="date"
                  label="Fecha de ingreso"
                  id="date"
                  required
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextFieldForm
                  control={control}
                  name="bill number"
                  label="Provedor"
                  id="bill number"
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextFieldForm
                  control={control}
                  name="factory code"
                  label="Codigo de fabrica"
                  id="factory code"
                  type ="number"
                  required
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextFieldForm
                  control={control}
                  name="quantity"
                  label="Cantidad"
                  id="quantity"
                  required
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextFieldForm
                  control={control}
                  name="item description"
                  label="Descripcion del articulo"
                  id="item description"
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextFieldForm
                  control={control}
                  name="price"
                  label="Precio"
                  id="price"
                  type="number"
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextFieldForm
                  control={control}
                  name="subprice"
                  label="Sub-Total"
                  id="subprice"
                  type="number"
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextFieldForm
                  control={control}
                  name="total price"
                  label="Total"
                  id="total price"
                  type="number"
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextFieldForm
                  control={control}
                  name="nit"
                  label="Fecha de modificacion"
                  id="nit"
                  required
                />
              </Grid>

              <Grid item xs={12} md={12}>
                <Button variant="contained" type="submit">
                  Registrar
                </Button>
                <Button variant="contained" type="submit">
                  Modificar
                </Button>
              </Grid>
            </Grid>
          </form>
        </CustomCard>
      </div>
    </div>
  );
}

export default FormShopping