import { useState } from "react"
const ItemCount = () => {
const [cont, setCont] = useState(0)

    const sumar = () => {
        setCont(cont + 1)
    }

    const restar = () => {
        setCont(cont - 1)
    }

    return(
        <div>
            <button onClick={restar}>-</button>
            <span>{cont}</span>
            <button onClick={sumar}>+</button>
        </div>
    )

}
export default ItemCount