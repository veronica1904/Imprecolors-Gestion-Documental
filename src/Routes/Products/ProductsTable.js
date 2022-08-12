import React, { useEffect } from 'react'
import Table from '../../components/global/Table'
import { Visibility } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import styles from './product.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { listProduct } from '../../Redux/actions/products'
import { getListProducts } from '../../Redux/selectors/products';

function ProductsTable() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const productData = useSelector(getListProducts)
  
  console.log('productData >>> ', productData)
  useEffect(() => {
    dispatch(listProduct())
  },[])

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
      title: 'Provedor',
      field: 'provider',
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
    <div className={styles.productsTables}>
        <Table
            columns={columnsDataUser}
            data={productData || []}
            title={'Listado de productos'}
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

export default ProductsTable