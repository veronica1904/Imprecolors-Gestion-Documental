import React, {useEffect} from 'react';
import Table from '../../components/global/Table';
import { Visibility } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import styles from './user.module.scss';
import { useDispatch, useSelector} from 'react-redux';
import { gertUsers } from '../../Redux/actions/user';
import { getListUsers } from '../../Redux/selectors/user';

function UserTable() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userList = useSelector(getListUsers)

     useEffect(()=>{
       dispatch(gertUsers())
     },[])

console.log('userList >>> ', userList)
    const columnsDataUser = [ 
      {
        title: 'Activo',
        field: 'active',
      },
      {
        title: 'Nombres',
        field: 'name',
      },
      {
        title: 'Apellidos',
        field: 'surname',
      },
      {
        title: 'Celular',
        field: 'phone',
      },
      {
        title: 'rol',
        field: 'role',
    }
  ]
    return (
      <div className={styles.userTables}>
          <Table
              columns={columnsDataUser}
              data={userList}
              title={'Usuarios registrados'}
              actions={[
                {
                    icon: Visibility,
                    tooltip: 'Ver detalle',
                    onClick: (event, rowData) => {
                        navigate(`/details-users/${rowData._id}`)
                    }
                }
            ]}
              
          />
      </div>
    )
  }
  

export default UserTable