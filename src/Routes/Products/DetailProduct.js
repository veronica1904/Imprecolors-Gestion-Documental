import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getListProducts } from "../../Redux/selectors/products";
import CustomCard from "../../components/global/CustomCard";
import styles from "./product.module.scss";
import { Button } from "@mui/material";
window.Buffer = window.Buffer || require("buffer").Buffer;

export default function DetailProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const listProductData = useSelector(getListProducts);
  // const listProvider = useSelector(g)
  const filterProduct = listProductData?.find((item) => item._id === id);
  const image = filterProduct?.file?.data || "";
  const imageBase64 = Buffer.from(image).toString("base64");
  
  const goBack = () => {
    navigate(-1)
  }
  return (
    <div className={styles.contentDetailProduct}>
      <CustomCard>
        <div className={styles.cardDetails}>
        <div>
          <p>Nombre: {filterProduct.name}</p>
          <p>Descripción: {filterProduct.description}</p>
          <p>Proveedor: {filterProduct.provider || "Sin proveedor"}</p>
          <p>Precio: $ {filterProduct.price} </p>
          <p>Cantidad: {filterProduct.quantity} </p>
        </div>
        <div>
          <img
            src={`data:image/png;base64,${imageBase64}`}
            alt="image-product"
          />
        </div>
        </div>
        <Button variant="contained" onClick={goBack}>Atras</Button>
      </CustomCard>
    </div>
  );
}
