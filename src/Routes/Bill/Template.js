import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gertUsers } from "../../Redux/actions/user";
import { getbill } from "../../Redux/selectors/bill";
import { getListUsers } from "../../Redux/selectors/user";
import "./template.css";
import { listProduct } from "../../Redux/actions/products";
import { getListProducts } from "../../Redux/selectors/products";
import moment from "moment";
import ImprimeCorlors from "../../assets/images/fondo/logo_ImpriColors.png";
import { Button } from "@mui/material";

export default function Template() {
  const dispatch = useDispatch();
  const dataBill = useSelector(getbill);
  const clientList = useSelector(getListUsers);
  const productData = useSelector(getListProducts);
  console.log("dataBill >>> ", dataBill);
  console.log("productData >>> ", productData);
  useEffect(() => {
    const type = "client";
    dispatch(gertUsers(type));
    dispatch(listProduct());
  }, []);

  const formatbill = () => {
    const dataClient = clientList.find((item) => {
      return item._id === dataBill.client;
    });
    const listProducts = dataBill?.products?.map((item) => {
      const productInfo =
        productData.find((product) => item.idProduct === product._id) || {};
      return {
        ...item,
        priceUnit: productInfo.price,
        priceTotal: productInfo.price * item.quantity,
        nameProduct: productInfo.name,
        iva: productInfo.iva,
      };
    });
    const totalAllProductsWithoutIVA = listProducts?.reduce(
      (prev, current) => prev + current.priceTotal,
      0
    );
    const totalAllProductsWithIVA = listProducts?.reduce(
      (prev, current) =>
        prev + (current.priceTotal + current.priceTotal * (current.iva / 100)),
      0
    );
    return {
      client: dataClient,
      totalAllProductsWithoutIVA: totalAllProductsWithoutIVA,
      totalAllProductsWithIVA: totalAllProductsWithIVA,
      listProducts: listProducts,
    };
  };

 const handleDownload = () => {
	alert('aca va ')
 }

  const { client, listProducts, totalAllProductsWithoutIVA, totalAllProductsWithIVA } = formatbill();

  return (
	<>
	<Button fullWidth variant="contained" onClick={handleDownload}>Descargar Recibo</Button>
	<div className="invoice-box">
      <table cellpadding="0" cellspacing="0">
        <tr className="top">
          <td colspan="2">
            <table>
              <tr>
                <td className="title">
                  <img
                    src={ImprimeCorlors}
                    style={{ width: 100, maxWidth: "300px" }}
                  />
                </td>

                <td>
                  Invoice #: 123
                  <br />
                  Creado: {moment(new Date()).format("lll")}
                  <br />
                  Vencimiento{moment(dataBill.date).format("lll")}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr className="information">
          <td colspan="2">
            <table>
              <tr>
                <td>
                  Imprime Colors, Inc.
                  <br />
                  calle 100 <br />
                  Sunnyville, CA cali
                </td>

                <td>
                  Cliente:
                  <br />
                  {client.name} {client.last_name}
                  <br />
                  {dataBill.email}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <tr className="heading">
          <td>Metodod de pago</td>

          <td>Check #</td>
        </tr>

        <tr className="details">
          <td>Efectivo</td>

          <td>1000</td>
        </tr>

        <tr className="heading">
          <td>Productos</td>

          <td>Price</td>
        </tr>
        {listProducts?.map((item) => (
          <tr className="item">
            <td>{item.nameProduct}</td>
            <td>{item.priceTotal}</td>
          </tr>
        ))}

        <tr className="total">
          <td></td>
          <td>Sub-Total: ${totalAllProductsWithoutIVA}</td>
        </tr>
		<tr className="total">
          <td></td>
          <td>Total: ${totalAllProductsWithIVA}</td>
        </tr>
      </table>
    </div>
	</>
    
  );
}
