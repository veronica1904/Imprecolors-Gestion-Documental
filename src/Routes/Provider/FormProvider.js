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
        <div className={styles.formLogin}>
          <CustomCard>
            <h1>Registrar provedor de campo</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={12}>
                  <TextFieldForm
                    control={control}
                    name="name"
                    label="Nombres"
                    id="name"
                    required
                  />
                </Grid>
                <Grid item xs={6} md={12}>
                  <TextFieldForm
                    control={control}
                    name="surname"
                    label="Apellidos"
                    id="surname"
                    required
                  />
                </Grid>
                <Grid item xs={6} md={12}>
                  <TextFieldForm
                    control={control}
                    name="phone"
                    label="Telefono"
                    id="phone"
                    required
                  />
                </Grid>
                <Grid item xs={6} md={12}>
                  <TextFieldForm
                    control={control}
                    name="email"
                    label="E-mail"
                    id="email"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SelectForm
                    control={control}
                    name="busniess"
                    label="aqui preguntar ?????'"
                    id="busniess"
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