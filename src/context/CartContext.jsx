import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [cart,setCart] = useState([])
    //Agregar Items
    const addItem= (item, qty)=>{
        if(isInCart(item.id)){
            const carritoAct = cart.map((prod)=>{
                if(item.id === prod.id){
                    return {...prod, quantity: prod.quantity + qty}
                }else{
                    return prod
                }
            })
            setCart(carritoAct)
        }else{
        setCart([...cart,{...item,quantity:qty}])
    }
    }
    //Delete Items
    const clear = ()=>{
        setCart([])
    }
    //Delete 1 item
    const removeItem = (id)=>{
        setCart(cart.filter((prod)=> prod.id !== id))
    }
    //boolean
    const isInCart = (id)=>{
        return cart.some((prod)=> prod.id === id)
    }
    const cartQuantity = () => {
    return cart.reduce((acc, prod)=> acc += prod.quantity,0)
    }
    const total = () => {
    return cart.reduce((acc, prod)=> acc += (prod.price * prod.quantity), 0)
    }


    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, cartQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}