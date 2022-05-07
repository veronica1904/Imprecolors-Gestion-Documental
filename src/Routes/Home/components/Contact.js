import React from 'react'
import { useForm } from 'react-hook-form';
import { Button, Grid } from '@mui/material';
import TextFieldForm from '../../../components/FormComponents/TextFieldForm'
import styles from "../home.module.scss"
import ContactImage from '../../../assets/images/illustrations/contact.SVG'
import CustomCard from '../../../components/global/CustomCard';

function Contact() {
    const { handleSubmit, control, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className={styles.contentSection}>
            <img src={ContactImage} />
            <CustomCard>
                <h1>Contáctanos</h1>
                <p>¿Quieres saber más de nosotros? Completa tus datos y un asesor se pondrá en contacto</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={12}>
                            <TextFieldForm
                                control={control}
                                name="name"
                                label="Nombre"
                                id="name"
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
                                name="phone"
                                label="Teléfono"
                                id="phone"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextFieldForm
                                control={control}
                                name="message"
                                label="Mensaje"
                                id="message"
                                multiline
                                rows={4}
                                required    
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <Button variant='contained' type='submit'>
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CustomCard>
        </div>
    )
}

export default Contact