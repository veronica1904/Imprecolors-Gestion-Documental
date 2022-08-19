import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import TextFieldForm from "../../components/FormComponents/TextFieldForm";
import SelectForm from "../../components/FormComponents/SelectForm";
import styles from "./register.module.scss";
import CustomCard from "../../components/global/CustomCard";
import { gertUsers, registerUser } from "../../Redux/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { getListUsers } from "../../Redux/selectors/user";


function RegisterClient() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const dispatch = useDispatch();

  const userList = useSelector(getListUsers)
  const attendby = userList.map(item => {
    return {
      label: item.name,
      value: item._id
    }
  })

  const typeDocument = [
    { label: "CC", value: "CC" },
    { label: "CE", value: "CE" },
    { label: "NIT", value: "NIT" },
    { label: "Pasaporte", value: "Pasaporte" },
    { label: "PEP", value: "PEP" },
];

  const onSubmit = (data) => {
    console.log('data >>> ', data)
    const addtype = {
      type: "client",
      ...data
    }
    dispatch(registerUser(addtype));
  };

  useEffect(()=> {
    dispatch(gertUsers())
  },[])
  return (
    <div className={styles.formClient}>
      <CustomCard>
        <h1>Registrar Cliente</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <TextFieldForm
                control={control}
                name="name"
                label="Nombres"
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
                type="number"
                required
              />
            </Grid>
           
            <Grid item xs={6} md={6}>
              <TextFieldForm
                control={control}
                name="landline"
                label="Telefono fijo"
                id="landline"
                type="number"
                onInput = {(e) =>{
                  e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,15)
              }}
                required
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <TextFieldForm
                control={control}
                name="phone"
                label="celular"
                id="phone"
                type="number"
                onInput = {(e) =>{
                  e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,15)
              }}
                required
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <TextFieldForm
                control={control}
                name="address"
                label="dirección"
                id="address"
                required
              />
            </Grid>
            <Grid item xs={6} md={12}>
              <SelectForm
               options={attendby}
                control={control}
                name="attendedBy"
                label="Atendido por"
                id="attendedBy"
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
export default RegisterClient;
