import React from 'react'
import Table from '../../components/global/Table'
import { Visibility } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

function Dashboard() {
  const navigate = useNavigate()

  const columnsDataUser = [
    {
      title: 'Número de empleado',
      field: 'employee_number',
    },
    {
      title: 'Nombre',
      field: 'name',
    },
    {
      title: 'Apellido',
      field: 'surname',
    },
    {
        title: 'Dirección',
        field: 'address',
    },
    {
      title: 'Número de celular',
      field: 'phone',
    },
    {
        title: 'Estatus',
        field: 'active',
        render: rowData => rowData.active ? "activo": "desactivado"
    },
    {
      title: 'fecha de creación',
      field: 'date_create',
       render: rowData => moment(rowData.date_create).format('lll')
  },
]
  return (
    <div style={{ marginLeft: 50}}>
        <Table
            columns={columnsDataUser}
            data={[]}
            title={'Usuarios creados'}
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

export default Dashboard