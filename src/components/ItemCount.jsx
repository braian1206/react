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
      <div className="d-flex align-items-center gap-2">
            <button
                onClick={restar}
                className="btn btn-outline-primary rounded-circle"
                style={{ width: "40px", height: "40px", fontWeight: "bold" }}
            >
                -
            </button>

            <span className="fw-bold mx-2" style={{ minWidth: "30px", textAlign: "center" }}>
                {cont}
            </span>

            <button
                onClick={sumar}
                className="btn btn-outline-primary rounded-circle"
                style={{ width: "40px", height: "40px", fontWeight: "bold" }}
            >
                +
            </button>
            </div>

        <button className="btn btn-outline-primary" disabled={stock === 0 || cont === 0} onClick={()=> onAdd(cont)}>Comprar</button>
        </div>
    )

}
export default ItemCount