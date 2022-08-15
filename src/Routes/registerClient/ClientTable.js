import React from 'react';
import Table from '../../components/global/Table';
import { Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import styles from './register.module.scss';

function ClientTable() {
    const navigate = useNavigate()

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
        field: 'provider_camp',
      },
      {
        title: 'Tipo de documento',
        field: 'provider_business',
      },
      {
          title: 'Nº de documento',
          field: 'quantity',
      },
      {
        title: 'Telefono fijo',
        field: 'quantity',
    },
    {
        title: 'Celular',
        field: 'quantity',
    },
    {
        title: 'Direcciòn',
        field: 'quantity',
    },
    {
        title: 'Atendido',
        field: 'quantity',
    },
      {
        title: 'Observaciones',
        field: 'date_create',
         render: rowData => moment(rowData.date_create).format('lll')
    },
  ]
    return (
      <div className={styles.shoppingTables}>
          <Table
              columns={columnsDataUser}
              data={[]}
              title={'Listado de facturas de compras'}
              actions={[
                {
                    icon: Visibility,
                    tooltip: 'Ver detalle',
                    onClick: (event, rowData) => {
                        navigate(`/details-users/${rowData.id_client}`)
                    }
                }
            ]}
              
          />
      </div>
    )
  }
  

export default ClientTable