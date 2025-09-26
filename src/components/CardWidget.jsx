import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Badge } from "react-bootstrap"

const CardWidget = () => {
    const {cart, cartQuantity} = useContext(CartContext)
    return(

        <div>
            <span>💰</span>
            {cart.length > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}


        </div>
    )
}
export default CardWidget