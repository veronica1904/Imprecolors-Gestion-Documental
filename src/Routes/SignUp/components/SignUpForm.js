
import { Button, Checkbox, Grid } from '@mui/material';
import React from 'react'
import TextFieldForm from '../../../components/FormComponents/TextFieldForm';
import CustomCard from '../../../components/global/CustomCard'
import { useForm } from 'react-hook-form';
import styles from "../singup.module.scss"
import { FormControlLabel } from '@mui/material';


function SignUpForm() {
    const { handleSubmit, control, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div className={styles.contentSection}>
        <CustomCard>
            <h1>Registrate</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <TextFieldForm
                                control={control}
                                name="name"
                                label="Nombres y apellidos"
                                id="name"
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextFieldForm
                                control={control}
                                phone="phone"
                                label="Telefono Movil"
                                id="phone"
                                type="number"
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextFieldForm
                                control={control}
                                name="landline"
                                label="Telefono Fijo"
                                id="landline"
                                type
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextFieldForm
                                control={control}
                                name="email"
                                label="Correo Electrónico"
                                id="email"
                                required
                                type="email"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextFieldForm
                                control={control}
                                name="password"
                                label="Contraseña"
                                id="password"
                                type="password"
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextFieldForm
                                control={control}
                                name="rePassword"
                                label="Repite tu contraseña"
                                id="rePassword"
                                type="password"
                                required    
                            />
                        </Grid>
                        <Grid item xs={12} md={6} className='checkbox'>
                        <FormControlLabel control={<Checkbox/>} label=""/>
                        Acepto los terminos y condiciones
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Button variant='contained' type='submit'>
                                Registrar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
        </CustomCard>

    </div>
  )
}

export default SignUpForm