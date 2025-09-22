import React, { useEffect, useState } from 'react';
import Item from './Item';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../service/firebase';
import LoaderComponent from './LoaderComponent';

const ItemListContainer = ({ mensaje }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setCargando(true);
      try {
        const querySnapshot = await getDocs(collection(db, "productos"));
        const items = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProductos(items);
      } catch (error) {
        console.log(error);
      } finally {
        setCargando(false);
      }
    };

    fetchProducts();
  }, []);

  if (cargando) return <LoaderComponent />;

  return (
    <div>
      <h1>{mensaje}</h1>
      <div className="d-flex flex-wrap gap-3">
        {productos.map(prod => (
          <Item key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
