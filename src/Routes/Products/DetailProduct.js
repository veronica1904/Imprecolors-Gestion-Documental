import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getListProducts } from '../../Redux/selectors/products';

export default function DetailProduct() {
    const { id } = useParams();
    const listProductData = useSelector(getListProducts)
    console.log('listProductData >>> ', listProductData)
    const filterProduct = listProductData?.filter(item => {
        return item._id === id
    })
    console.log('id >>> ', id)
  return (
    <div>DetailProduct</div>
  )
}
