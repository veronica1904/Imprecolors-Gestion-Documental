import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import TextFieldForm from "../../components/FormComponents/TextFieldForm";
import SelectForm from "../../components/FormComponents/SelectForm";
import styles from "./provider.module.scss";
import CustomCard from "../../components/global/CustomCard";
import { useDispatch } from "react-redux";


function FormProvider() {
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
    <div className={styles.formProvider}>
      <CustomCard>
        <h1>Registrar provedor de campo</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={12}>
              <TextFieldForm
                control={control}
                name="codeBusniess"
                label="Codigo de empresa"
                id="codeBusniess"
                inputProps={{ maxLength: 100 }}
                required
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextFieldForm
                control={control}
                name="name"
                label="Nombres"
                id="name"
                inputProps={{ maxLength: 100 }}
                required
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextFieldForm
                control={control}
                name="surname"
                label="Apellidos"
                id="surname"
                inputProps={{ maxLength: 100 }}
                required
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextFieldForm
                control={control}
                name="phone"
                label="Telefono"
                id="phone"
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 15)
                }}
                type="number"
                required
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextFieldForm
                control={control}
                name="email"
                label="E-mail"
                id="email"
                type="email"
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
  );
}
export default FormProvider