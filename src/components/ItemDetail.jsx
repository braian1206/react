import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({ detalle }) => {
const [purchase, setPurchase]= useState(false)
const {addItem}=useContext(CartContext)  
    const onAdd = (cantidad) => {
      setPurchase(true)
      addItem(detalle, cantidad) 
    }

  return (
    <div className="d-flex justify-content-center mt-4">
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src={detalle.img} alt={detalle.name} />
        <Card.Body>
          <Card.Title>{detalle.name}</Card.Title>
          <Card.Text>{detalle.description}</Card.Text>
          <Card.Text>
            <strong>Precio:</strong> ${detalle.price},00
          </Card.Text>
          <Card.Text>
            <strong>Stock disponible:</strong> {detalle.stock}
          </Card.Text>
          {purchase ? <Link to ='/cart' className="btn btn-dark">Ir al carrito</Link>:<ItemCount stock={detalle.stock} onAdd={onAdd}/>}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
