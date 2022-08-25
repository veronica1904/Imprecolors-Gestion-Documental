import React from 'react'
import { useForm } from 'react-hook-form';
import { Button, Grid } from '@mui/material';
import TextFieldForm from '../../../components/FormComponents/TextFieldForm'
import styles from "../formLogin.module.scss";
import CustomCard from '../../../components/global/CustomCard';
import { actionLoginUser } from '../../../Redux/actions/user'
import { useDispatch } from 'react-redux';
import DatePickerForm from '../../../components/FormComponents/DatePickerForm';

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
                        <a href="https://api.whatsapp.com/send?phone=3106695272&text=!Hola%C2%A1%20Te%20estas%20comunicando%20con%20soporte%20web,%20en%20que%20podemos%20ayudarte?">Olvido su contraseña</a>
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