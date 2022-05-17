import React from 'react'
import { useForm } from 'react-hook-form';
import { Button, Grid } from '@mui/material';
import TextFieldForm from '../../../components/FormComponents/TextFieldForm'
import styles from "../formLogin.module.scss";
import CustomCard from '../../../components/global/CustomCard';
import { actionLoginUser } from '../../../Redux/actions/user'
import { useDispatch } from 'react-redux';

function FormLogin() {
    const { handleSubmit, control, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(actionLoginUser(data))

    }
    return (
        <div className={styles.formLogin}>
            <CustomCard>
                <h1>Iniciar sesión</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                      
                        <Grid item xs={12} md={12}>
                            <TextFieldForm
                                control={control}
                                name="users"
                                label="Usuario"
                                id="users"
                                required
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextFieldForm
                                control={control}
                                name="password"
                                label="Ingrese su contraseña"
                                id="password"
                                type="password"
                                required
                            />
                        </Grid>
                       
                        <Grid item xs={12} md={12}>
                            <Button variant='contained' type='submit'>
                                Ingresar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CustomCard>
        </div>
    )
}
export default FormLogin