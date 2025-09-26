import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import EmptyCart from "./EmptyCart";
import { db } from "../service/firebase";
const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [validMail, setValidMail] = useState('')
    const [orderId, setOrderId] = useState(null)
    const [alerta, setAlerta] = useState({ tipo: "", mensaje: "" });

    const {cart, total, clear}=useContext(CartContext)

    const buyerData = (e) => {
        setBuyer (
            {
                ...buyer,
                [e.target.name]: e.target.value
            }
        )
    }
    const finalizarCompra = (e) => {
        e.preventDefault()

        let  order = {
            comprador : buyer,
            compras : cart, 
            total: total(),
            date: serverTimestamp()
        }
        const ventas = collection(db, "orders")

        addDoc(ventas, order)
        .then ((res)=>{
            setOrderId(res.id)
            clear()
        }) 
    }
    if (!cart.length && !orderId){
        return <EmptyCart/>
    }

    return (
        <>
       {
        orderId
        ?   <div>
            <h2>Realizaste tu compra correctamente!</h2>
            <h3>El ID de la compra: {orderId}</h3>
         </div>
        :  <div>
            <h1>Complete el formulario con sus datos</h1>
                        <div className="container d-flex justify-content-center mt-5">
                <div className="card p-4 shadow" style={{ maxWidth: "500px", width: "100%", borderRadius: "15px", backgroundColor: "#f8f9fa" }}>
                    <h2 className="card-title text-center mb-4">Finalizar Compra</h2>

                    <form onSubmit={finalizarCompra} className="d-flex flex-column gap-3">
                    <input
                        placeholder="Ingrese su nombre"
                        name="name"
                        className="form-control form-control-lg"
                        type="text"
                        onChange={buyerData}
                        required
                    />

                    <input
                        placeholder="Ingrese su apellido"
                        name="lastname"
                        className="form-control form-control-lg"
                        type="text"
                        onChange={buyerData}
                        required
                    />

                    <input
                        placeholder="Ingrese su dirección"
                        name="address"
                        className="form-control form-control-lg"
                        type="text"
                        onChange={buyerData}
                        required
                    />

                    <input
                        placeholder="Ingrese su correo"
                        name="email"
                        className="form-control form-control-lg"
                        type="email"
                        onChange={buyerData}
                        required
                    />

                    <input
                        placeholder="Repita su correo"
                        name="second-email"
                        className="form-control form-control-lg"
                        type="email"
                        onChange={(e) => setValidMail(e.target.value)}
                        required
                    />

                    <button
                        className="btn btn-dark btn-lg mt-3"
                        type='submit'
                    >
                        Completar compra
                    </button>
                    </form>
                </div>
                </div>

        </div>
       }
       </>
    )
}
export default Checkout