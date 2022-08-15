import React from 'react'
import { Routes as Routing, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import { useSelector } from 'react-redux';
import Dashboard from './Dashboard/index';
import { isAuth } from '../Redux/selectors/user';
import RegisterUser from './RegisterUser/RegisterUser'
import RegisterClient from './RegisterClient/RegisterClient';
import Provider from './Provider/FormProvider'
import  Business  from './Provider/FormBusniess';
import ProductsTable from './Products/ProductsTable';
import ShoppingTable from './Shopping/ShoppingTable';
import BillTable from './Bill/BillTable'
import FormBill from './Bill/FormBill';
import RegisterProducts from './Products/RegisterProducts';
import FormTechnicalService from './TechnicalService/FormTechnicalService';
import FormShopping from './Shopping/FormShopping';
import ClientTable from './RegisterClient/ClientTable';
import UserTable from './RegisterUser/UserTable';
import ServiceTable from './TechnicalService/ServiceTable';

function Routes() {
  const auth = useSelector(isAuth)
  const ComponentInit = auth ? Dashboard : Home
  return (
    <Routing>
        <Route path="/" element={<ComponentInit />} />
        <Route path="/login" element={<Login />} />
        <Route path="users" >
          <Route index element={<UserTable />} />
          <Route path='createUser' element={<RegisterUser />} />
        </Route> 
        <Route path="client" >
          <Route index element={<ClientTable />} />
          <Route path='createClient' element={<RegisterClient />} />
        </Route>
        <Route path="provider" >
          <Route index element={<Dashboard />} />
          <Route path='createProvider' element={<Provider />} />
          <Route path='createBusniess' element={<Business />} />
        </Route>
        <Route path="products" >
          <Route index element={<ProductsTable />} />
          <Route path='createProduct' element={<RegisterProducts />} />
        </Route>
        <Route path="shopping" >
          <Route index element={<ShoppingTable />} />
          <Route path='shopping' element={<FormShopping />} />
        </Route>
        <Route path="technicalService" >
          <Route index element={<ServiceTable />} />
          <Route path='technicalService' element={<FormTechnicalService />} />
        </Route>
        <Route path="bill" >
          <Route index element={<BillTable />} />
          <Route path='createBill' element = {<FormBill />} />
        </Route>
    </Routing>
  )
}

export default Routes