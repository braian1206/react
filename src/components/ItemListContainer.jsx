import "../css/ItemListContainer.css"
import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock"
import Itemlist from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({mensaje}) => {
    const [data, setData]= useState([])
    const {category} = useParams()

    useEffect(()=>{
        getProducts()
        .then ((res)=>{
            if(category){
                setData(res.filter((item)=> item.category === category))
            }else{
                setData(res)
            }
        })
        .catch ((error)=> console.error(error))
    },[category])

    console.log(data)
    return(
        <div className="texto">
            <h1>{mensaje}{category && <span style={{textTransform: 'capitalize'}}>{category}</span>}</h1>
            <Itemlist data={data}/>
        </div>
    )
}
export default ItemListContainer