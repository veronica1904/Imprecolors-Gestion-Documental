import React from 'react'
import { Routes as Routing, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import { useSelector } from 'react-redux';
import Dashboard from './Dashboard/index';
import { isAuth } from '../Redux/selectors/user';
import RegisterUser from './registerClient/RegisterUser';
import ProductsTable from './Products/ProductsTable';


function Routes() {
  const auth = useSelector(isAuth)
  const ComponentInit = auth ? Dashboard : Home
  return (
    <Routing>
        <Route path="/" element={<ComponentInit />} />
        <Route path="/login" element={<Login />} />
        <Route path="users" >
          <Route index element={<Dashboard />} />
          <Route path='createUser' element={<RegisterUser />} />
        </Route>
        <Route path="products" >
          <Route index element={<ProductsTable />} />
          {/* <Route path='createProduct' element={<RegisterProducts />} /> */}
        </Route>
    </Routing>
  )
}

export default Routes