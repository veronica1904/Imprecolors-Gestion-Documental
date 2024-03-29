import React from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import TextFieldForm from "../../components/FormComponents/TextFieldForm";
import SelectForm from "../../components/FormComponents/SelectForm";
import styles from "./user.module.scss";
import CustomCard from "../../components/global/CustomCard";
import { registerUser } from "../../Redux/actions/user";
import { useDispatch } from "react-redux";

function RegisterUser() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const typeDocument = [
    { label: "CC", value: "type_identity" },
    { label: "CE", value: "type_identity" },
];

const rolUser = [
  { label: "Vendedor", value: "Client" },
  { label: "Tècnico de servicio", value: "Operario" },
];

  const onSubmit = (data) => {
    console.log('data >>> ', data)
    dispatch(registerUser(data));
  };
  return (
    <div className={styles.formLogin}>
      <CustomCard>
        <h1 id="testRegister">Registrar Usuario</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
              <TextFieldForm
                control={control}
                name="employee number"
                label="Numero de empleado"
                id="employee number"
                type= "number"
                required
                onInput = {(e) =>{
                    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,8)
                }}
              />
            </Grid>
            <Grid item xs={6} md={6}>
            <SelectForm
                options={rolUser}
                control={control}
                name="role"
                label="Rol del usuario"
                id="role"
                required
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextFieldForm
                control={control}
                name="name"
                label="Nombre"
                id="name"
                required
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextFieldForm
                control={control}
                name="surname"
                label="Apellidos"
                id="surname"
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
                type= "number"
                required
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextFieldForm
                control={control}
                name="landline"
                label="Telefono fijo"
                id="landline"
                type= "number"
                required
                onInput = {(e) =>{
                    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,15)
                }}
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextFieldForm
                control={control}
                name="phone"
                label="celular"
                id="phone"
                type= "number"
                required
                onInput = {(e) =>{
                    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,15)
                }}
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <TextFieldForm
                control={control}
                name="address"
                label="Dirección"
                id="address"
                required
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Button variant="contained" type="submit">
                Ingresar
              </Button>
            </Grid>
          </Grid>
        </form>
      </CustomCard>
    </div>
  );
}
export default RegisterUser;
