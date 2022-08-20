import React from "react";
import { Grid, MenuItem, Select, TextField } from "@mui/material";

export default function Addproducts({productDatalist = [], product, handleChange, item, index}) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={12}>
      <TextField 
      id="outlined-basic" 
      label="cantidad de productos" 
      variant="outlined"
      fullWidth
      type="number"
    //   ref={quanity}
    onChange={e => handleChange(e, index, "quantity")}
      />  
      </Grid>
      <Grid item xs={6} md={12}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={product}
          fullWidth
          label="products"
          onChange={e => handleChange(e, index, "idProduct")}
        >
            {productDatalist.map(item => {
                return<MenuItem value={item.value}>{item.label}</MenuItem>
            })}
          
        </Select>
      
      </Grid>
    </Grid>
  );
}
