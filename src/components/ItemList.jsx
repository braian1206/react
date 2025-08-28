import React from "react";
import Item from './Item'

const ItemList = ({data}) => {
    return (
        <div className="d-flex justify-content-center gap-4 flex-wrap mt-4">
            {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
        </div>
    )
}

export default ItemList