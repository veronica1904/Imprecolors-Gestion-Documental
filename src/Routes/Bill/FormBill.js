
import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { Button, Divider, Grid } from "@mui/material";
import TextFieldForm from "../../components/FormComponents/TextFieldForm";
import SelectForm from "../../components/FormComponents/SelectForm";
import CustomCard from "../../components/global/CustomCard";
import styles from "./bill.module.scss"
import { useDispatch, useSelector } from "react-redux";
import DatePickerForm from "../../components/FormComponents/DatePickerForm";
import { getListUsers } from "../../Redux/selectors/user";
import { gertUsers } from "../../Redux/actions/user";
import CustomModal from "../../components/global/CustomModal";
import RegisterClient from "../RegisterClient/RegisterClient";
import { listProduct } from "../../Redux/actions/products";
import { getListProducts } from "../../Redux/selectors/products";
import Addproducts from "./Addproducts";
import Template from "./Template";
import { actionDataBill } from "../../Redux/actions/bill";

const productDefault = {
  quantity: "",
  idProduct: ""
}

function FormBill() {
  const [activeClient, setActiveClient] = useState(false)
  const [activeNewClient, setActiveNewClient] = useState(false)
  const [activeTemplate, setActiveTemplate] = useState(false)
  const dispatch = useDispatch()
  const clientList = useSelector(getListUsers)
  const productData = useSelector(getListProducts)
  
  const [products, setProducts] = useState([
    productDefault
  ])
  const productDatalist = productData?.map(item => {
    return {
      label: item.name,
      value: item._id
    }
  })


  useEffect(() => {
    const type = "client"
    dispatch(gertUsers(type))
    dispatch(listProduct())
  }, [])


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

  const handleChange = (event, index, type) => {
    products[index] = {
      ...products[index],
      [type]: event.target.value
    }
    setProducts(products)
  };
  
  const onSubmit = (data) => {
    const dataBill = {
      ...data,
      products
    }
    console.log('dataBill >>> ', dataBill)
    setActiveTemplate(true)
   dispatch(actionDataBill(dataBill));
  };

  const listClient = () => {
    setActiveClient(true)
  }
  const handleAddProduct = () => {
    setProducts(prev => [...prev, productDefault ])
  }

 
  return (
    <div className={styles.formBill}>

      <CustomCard>

        {!activeTemplate ?
        <>
        <h1>Crear factura</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <DatePickerForm
                control={control}
                name="date"
                label="fecha"
                id="date"
                inputProps={{ maxLength: 100 }}
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Button variant="contained" onClick={() => setActiveNewClient(true)}>
                Nuevo cliente
              </Button>
              <Button variant="contained" onClick={listClient}>
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
                onInput={(e) => {
                  e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 15)
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
              <Button variant="contained" onClick={() => handleAddProduct(true)}>
                Agregar productos
              </Button>

            </Grid>

              {
                products.map((item, index) => (
                  <>
                  <Grid item xs={6} md={12}>
                  <Addproducts
                    index={index}
                    productDatalist={productDatalist}
                    // product={productSelect}
                    // quanity={quanity}
                    handleChange={handleChange} />
            </Grid>
            <Divider />
                  </>
                ))
              }


            <Grid item xs={12} md={12}>
              <Button variant="contained" type="submit">
                Generar factura
              </Button>
            </Grid>
          </Grid>
        </form>
        </>
        :
          <Template />
        }
      </CustomCard>
      <CustomModal open={activeNewClient} handleClose={() => setActiveNewClient(!activeNewClient)}>
        <RegisterClient />
      </CustomModal>
    </div>
  );
}

export default FormBill