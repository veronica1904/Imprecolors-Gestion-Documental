import React from 'react'
import Table from '../../components/global/Table'
import { Visibility } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

function ProductsTable() {
  const navigate = useNavigate()

  const columnsDataUser = [
    {
      title: 'Codigo',
      field: 'code',
    },
    {
      title: 'Nombre del producto',
      field: 'name',
    },
    {
      title: 'Provedor de campo',
      field: 'provider_camp',
    },
    {
      title: 'Provedor de empresa',
      field: 'provider_business',
    },
    {
        title: 'Cantidad',
        field: 'quantity',
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
            title={'Listado de productos'}
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

export default ProductsTable