import React, {useEffect} from 'react'
import { Button } from '@mui/material'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CustomCard from '../../components/global/CustomCard'
import styles from "./user.module.scss"
import { getClient } from '../../Redux/actions/user';
import { getDetailUser } from '../../Redux/selectors/user';
import { datauser } from 'browserslist';

export default function DetailsUser() {
  const { id } = useParams();
  const datauser = useSelector(getDetailUser)
  const dispatch = useDispatch()
  useEffect(() => dispatch(getClient(id)), []);
  
  console.log('datauser >>> ', datauser)
  return (
    <div className={styles.contentUserDeayils}>
        <CustomCard >
            <p><b>Nombre completo: </b> {datauser.name  + datauser.surname || "sin monbre"}</p>
            <p><b>Rol del usuario:</b> {datauser.role || "sin rol"}</p>
            <p><b>Número de empleado</b> {"sin número"}</p>
            <p><b>Tipo de documento:</b> {datauser.identity_type || "sin tipo de documento"}</p>
            <p><b>Número de documento:</b>{datauser.identity || "sin numero de documento"}</p>
            <p><b>Celular:</b> {datauser.phone || "sin número fijo"}</p>
            <Button variant='contained'>
              activar
            </Button>
        </CustomCard>
    </div>
        
  )
}
