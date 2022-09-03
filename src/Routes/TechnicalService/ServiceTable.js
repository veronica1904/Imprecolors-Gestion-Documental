import React from 'react';
import Table from '../../components/global/Table';
import { Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import styles from './technicalService.module.scss';
import DatePickerForm from "../../components/FormComponents/DatePickerForm";

function ServiceTable() {
    const navigate = useNavigate()

    const columnsDataUser = [ 
      {
        title: 'Nº orden de service',
        field: 'code',
      },
      {
        title: 'Fecha',
        field: 'name',
      },
      {
        title: 'Tipo de documento',
        field: 'provider_camp',
      },
      {
        title: 'Nº de documento',
        field: 'provider_business',
      },
      {
          title: 'Nombres y Apellidos',
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
        title: 'Observaciones',
        field: 'quantity',
    },
 
    {
        title: 'Atendido',
        field: 'quantity',
    },
   
  ]
    return (
      <div className={styles.serviceTables}>
          <Table
              columns={columnsDataUser}
              data={[]}
              title={'Listado de servicio tècnico'}
              actions={[
                {
                    icon: Visibility,
                    tooltip: 'Ver detalle',
                    onClick: (event, rowData) => {
                        // navigate(`/details-users/${rowData.id_client}`)
                    }
                }
            ]}
              
          />
      </div>
    )
  }
  

export default ServiceTable