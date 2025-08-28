import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ItemDetail = ({ detalle }) => {
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
          <Button variant="success">Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
