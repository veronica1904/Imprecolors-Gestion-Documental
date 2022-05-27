import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import TextFieldForm from "../../components/FormComponents/TextFieldForm";
import SelectForm from "../../components/FormComponents/SelectForm";
import styles from "./provider.module.scss";
import CustomCard from "../../components/global/CustomCard";
import { useDispatch } from "react-redux";


function FormBusniess() {
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
            <h1>Registrar empresa provedora</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={12}>
                  <TextFieldForm
                    control={control}
                    name="url"
                    label="URL o enlace pagina de la empresa"
                    id="url"
                    required
                  />
                </Grid>
                <Grid item xs={6} md={12}>
                  <TextFieldForm
                    control={control}
                    name="nameBusniess"
                    label="Nombre de la empresa"
                    id="nameBusniess"
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
                <Grid item xs={12} md={6}>
                  <SelectForm
                    control={control}
                    name="nit"
                    label="N.I.T'"
                    id="nit"
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
export default FormBusniess