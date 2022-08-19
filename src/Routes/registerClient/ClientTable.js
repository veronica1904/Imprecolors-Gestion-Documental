import React,{useEffect } from 'react';
import Table from '../../components/global/Table';
import { Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector} from 'react-redux';
import styles from './register.module.scss';
import { gertUsers } from '../../Redux/actions/user';
import { getListUsers } from '../../Redux/selectors/user';

function ClientTable() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const clientList = useSelector(getListUsers)

    console.log('clientList >>> ', clientList)
    useEffect(()=>{
      const type = "client"
      dispatch(gertUsers(type))
    },[])

    const columnsDataUser = [ 
      {
        title: 'Nº de cliente',
        field: 'code',
      },
      {
        title: 'Nombres',
        field: 'name',
      },
      {
        title: 'Apellidos',
        field: 'last_name',
      },
      {
        title: 'Tipo de documento',
        field: 'type_document',
      },
      {
        title: 'Telefono fijo',
        field: 'landline',
    },
    {
        title: 'Celular',
        field: 'phone',
    },
    {
        title: 'Direcciòn',
        field: 'address',
    },
    {
        title: 'Atendido',
        field: 'attendedBy',
    },
      {
        title: 'Fecha de creación',
        field: 'date_create',
         render: rowData => moment(rowData.date_create).format('lll')
    },
  ]
    return (
      <div className={styles.formClient}>
          <Table
              columns={columnsDataUser}
              data={clientList}
              title={'Listado de clientes'}
            //   actions={[
            //     {
            //         icon: Visibility,
            //         tooltip: 'Ver detalle',
            //         onClick: (event, rowData) => {
            //             navigate(`/details-users/${rowData.id_client}`)
            //         }
            //     }
            // ]}
              
          />
      </div>
    )
  }
  

export default ClientTable