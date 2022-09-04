import React from 'react'
import {useForm} from 'react-hook-form'
import {Button} from '@mui/material'
function CustomImg({onSubmit}) {
    const {register, handleSubmit} = useForm();
   
  return (
    <form >
    <input {...register("picture")} type="file"/>
    <Button onClick={handleSubmit(onSubmit)}>Cargar</Button>
  </form>
  )
}
export default CustomImg