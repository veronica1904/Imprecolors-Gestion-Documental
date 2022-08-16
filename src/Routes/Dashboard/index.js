import React, { useEffect } from 'react'
import Table from '../../components/global/Table'
import { Visibility } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { gertUsers } from '../../Redux/actions/user'
import { getListUsers } from '../../Redux/selectors/user'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userData = useSelector(getListUsers)

  console.log('userData >>> ', userData)
  useEffect(() => {
    dispatch(gertUsers())
  }, []);

  const columnsDataUser = [
    {
      title: 'Número de empleado',
      field: 'user_number',
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
      title: 'Número doc',
      field: 'identity'
    },
    {
      title: 'fecha de creación',
      field: 'date_create',
       render: rowData => moment(rowData.date_create).format('lll')
  },
]
  return (
    <div style={{ marginLeft: 50, marginRight: 10}}>
        <Table
            columns={columnsDataUser}
            data={userData || []}
            title={'Usuarios creados'}
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

export default Dashboard