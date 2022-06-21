import React from 'react';
import Table from '../../components/global/Table';
import { Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import styles from './shopping.module.scss';

function UserTable() {
    const navigate = useNavigate()

    const columnsDataUser = [ 
      {
        title: 'Nº de ingreso de factura',
        field: 'code',
      },
      {
        title: 'Nº de factura',
        field: 'name',
      },
      {
        title: 'Fecha de ingreso',
        field: 'provider_camp',
      },
      {
        title: 'Provedor',
        field: 'provider_business',
      },
      {
          title: 'Codigo de fabrica',
          field: 'quantity',
      },
      {
        title: 'Cantidad',
        field: 'quantity',
    },
    {
        title: 'Precio',
        field: 'quantity',
    },
    {
        title: 'Sub-Total',
        field: 'quantity',
    },
    {
        title: 'Total',
        field: 'quantity',
    },
      {
        title: 'fecha de creación',
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
  

export default UserTable