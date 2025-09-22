import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
const [detalle, setDetalle]= useState({})
const [cargando, setCargando] = useState(false)
const [invalid, setInvalid] = useState(null)
const {id} = useParams()


//FIREBASE
  useEffect(()=>{
    setCargando(true)
    //conectar con nuesta colleccion y crear una referencia
    const docRef = doc(db, "productos", id)
    //traer el documento
    getDoc(docRef)
    .then((res)=> {
      if(res.data()){
        setDetalle({id: res.id, ...res.data()})
      }else{
        setInvalid(true)
      }
    })
    .catch((error)=> console.log(error))
    .finally(()=> setCargando(false))
  },[id])


    if(invalid){
      return(
        <div>
           <h1>El producto no existe! 😭</h1>
          <Link to='/' className='btn btn-dark'> Ir a home</Link>
        </div>
      )
    }

  return (
    <>
    {
      cargando 
      ? <LoaderComponent/>
      : <ItemDetail detalle={detalle}/>
    }
    </>
  )
}

export default ItemDetailContainer