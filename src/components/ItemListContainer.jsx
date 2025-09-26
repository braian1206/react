import React, { useEffect, useState } from 'react';
import Item from './Item';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../service/firebase';
import LoaderComponent from './LoaderComponent';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ mensaje }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const { category } = useParams(); 

  useEffect(() => {
    const fetchProducts = async () => {
      setCargando(true);
      try {
        const productsCollection = category
          ? query(collection(db, 'productos'), where('category', '==', category))
          : collection(db, 'productos');

        const res = await getDocs(productsCollection);
        const list = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(list);
      } catch (error) {
        console.error(error);
      } finally {
        setCargando(false);
      }
    };

    fetchProducts();
  }, [category]); 

  if (cargando) return <LoaderComponent />;

  return (
   <div className="container mt-4">
  <h1 className="text-center mb-4">
    {mensaje} {category && `- ${category}`}
  </h1>

  <div className="row g-4 justify-content-center">
    {productos.map((prod) => (
      <div key={prod.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card h-100 shadow-sm">
          <img
            src={prod.img} // asegúrate de tener la propiedad imagen
            className="card-img-top"
            alt={prod.name}
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{prod.name}</h5>
            <p className="card-text mb-2">${prod.price}</p>
            <a href={`/item/${prod.id}`} className="btn btn-primary mt-auto">
              Ver Detalle
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default ItemListContainer;
