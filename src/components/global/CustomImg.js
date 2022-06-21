import React from 'react'
import {useForm} from 'react-hook-form'
import {Button} from '@mui/material'
function CustomImg() {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
      console.log(data);
    };
  return (
    <form >
    <input {...register("picture")} type="file"/>
    <Button onClick={handleSubmit(onSubmit)}>Cargar</Button>
</form>
  )
}
export default CustomImg