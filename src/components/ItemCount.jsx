import { useState } from "react"
const ItemCount = ({stock, onAdd}) => {
const [cont, setCont] = useState(1)

    const sumar = () => {
        if(cont < stock){
        setCont(cont + 1)
    }
    }

    const restar = () => {
      if(cont > 0){
        setCont(cont - 1)
    }
    }

    return(
       <div> 
        <div>
            <button onClick={restar}>-</button>
            <span>{cont}</span>
            <button onClick={sumar}>+</button>
        </div>
        <button disabled={stock === 0 || cont === 0} onClick={()=> onAdd(cont)}>Comprar</button>
        </div>
    )

}
export default ItemCount