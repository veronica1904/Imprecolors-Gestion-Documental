import React from 'react';
import Table from '../../components/global/Table';
import { Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import styles from './user.module.scss';

function UserTable() {
    const navigate = useNavigate()

    const columnsDataUser = [ 
      {
        title: 'Nº de empleado',
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
        title: 'Celular',
        field: 'provider_business',
      },
      {
          title: 'Telefono fijo',
          field: 'quantity',
      },
      {
        title: 'E-mail',
        field: 'quantity',
    },
    {
        title: 'Direcciòn',
        field: 'quantity',
    },
      {
        title: 'fecha de creación',
        field: 'date_create',
         render: rowData => moment(rowData.date_create).format('lll')
    },
  ]
    return (
      <div className={styles.userTables}>
          <Table
              columns={columnsDataUser}
              data={[]}
              title={'Uusuarios registrados'}
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