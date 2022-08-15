import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import TextFieldForm from "../../components/FormComponents/TextFieldForm";
import SelectForm from "../../components/FormComponents/SelectForm";
import CustomCard from "../../components/global/CustomCard";
import { useDispatch } from "react-redux";
import styles from './technicalService.module.scss'
import DatePickerForm from "../../components/FormComponents/DatePickerForm";


function  FormTechnicalService () {
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
      const typeDocument = [
        { label: "CC", value: "type_identity" },
        { label: "CE", value: "type_identity" },
        { label: "NIT", value: "type_identity" },
        { label: "Pasaporte", value: "type_identity" },
        { label: "PEP", value: "type_identity" },
    ];

      return (
       <div className={styles.formTechnicalService}>
        <div>
          <CustomCard>
            <h1>Registrar servicio tècnico</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
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
                <Grid item xs={6} md={6}>
                  <TextFieldForm
                    control={control}
                    name="numberService"
                    label="Orden de service"
                    id="numberService"
                    type="number"
                    required
                  />
                </Grid>
                <Grid item xs={6} md={6}>
              <SelectForm
                options={typeDocument}
                control={control}
                name="identity_type"
                label="Tipo de Documento"
                id="identity_type"
                required
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextFieldForm
                control={control}
                name="identity"
                label="Número de documento"
                id="identity"
                type="number"
                required
              />
            </Grid>
          
                <Grid item xs={6} md={12}>
                  <TextFieldForm
                    control={control}
                    name="name"
                    label="Nombres y Apellidos"
                    id="name"
                    required
                  />
                </Grid>
                <Grid item xs={6} md={12}>
                  <TextFieldForm
                    control={control}
                    name="phone"
                    label="Telefono"
                    id="phone"
                    Type="number"
                    required
                  />
                </Grid>
                <Grid item xs={6} md={12}>
                  <TextFieldForm
                    control={control}
                    name="address"
                    label="Nombres y Apellidos"
                    id="address"
                    required
                  />
                </Grid>
                <Grid item xs={6} md={12}>
                  <TextFieldForm
                    control={control}
                    name="email"
                    label="E-mail"
                    id="email"
                    type="email"
                    required
                  />
                </Grid>
                <Grid item xs={6} md={12}>
                  <TextFieldForm
                    control={control}
                    name="observation"
                    label="Observaciones"
                    id="observation"
                    required
                  />
                </Grid>
                <Grid item xs={6} md={12}>
                  <TextFieldForm
                    control={control}
                    name="attendedby"
                    label="Atendido por"
                    id="attendedby"
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
export default FormTechnicalService