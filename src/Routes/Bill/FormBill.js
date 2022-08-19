
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Grid } from "@mui/material";
import TextFieldForm from "../../components/FormComponents/TextFieldForm";
import SelectForm from "../../components/FormComponents/SelectForm";
import CustomCard from "../../components/global/CustomCard";
import styles from "./bill.module.scss"
import { useDispatch, useSelector } from "react-redux";
import DatePickerForm from "../../components/FormComponents/DatePickerForm";
import { getListUsers } from "../../Redux/selectors/user";
import { gertUsers } from "../../Redux/actions/user";
import CustomModal from "../../components/global/CustomModal";
import RegisterClient from "../registerClient/RegisterClient";

function FormBill() {
    const [activeClient, setActiveClient] = useState(false)
    const [activeNewClient, setActiveNewClient] = useState(false)

    const dispatch = useDispatch()
    const clientList = useSelector(getListUsers)

    console.log('clientList >>> ', clientList)
   
    useEffect(()=>{
      const type = "client"
      dispatch(gertUsers(type))
    },[])


    const clients = clientList?.map(item => {
      return {
        label: item.name || "sin mombre",
        value: item._id
      }
    })
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch((data));
  };

  const listClient =() => {
    setActiveClient(true)
  }
  return (
     <div className={styles.formBill}>
   
      <CustomCard>
        <h1>Crear factura</h1>
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
             <Grid item xs={12} md={12}>
              <Button variant="contained" onClick={() => setActiveNewClient(true)}>
                Nuevo cliente
              </Button>
              <Button variant="contained"  onClick={listClient}>
                Clientes
                </Button>
            </Grid>
            {activeClient && 
               <Grid item xs={6} md={12}>
               <SelectForm
                   control={control}
                   name="client"
                   label="Lista de clientes'"
                   id="nit"
                   options={clients}
                 />
                  </Grid>
              
            }
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
      <CustomModal open={activeNewClient} handleClose={() => setActiveNewClient(!activeNewClient)}>
              <RegisterClient />
        </CustomModal>
    </div>
  );
}

export default FormBill