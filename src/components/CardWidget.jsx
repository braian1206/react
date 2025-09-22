import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const CardWidget = () => {
    const {cart, cardQuantity} = useContext(CartContext)
    return(

        <div>
            <span>💰</span>
            {cart.length > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}

        </div>
    )
}
export default CardWidget