import { useEffect, useState } from "react";
import Item from "../Item/Item"
import { getProductosByCategoria, getProductos } from "../../asyncMonk";
import { useParams } from "react-router-dom";
    
export default function ItemListContainer({title}){
       
       
        
        const [items, setItems] = useState([]);
        const{ categoria } = useParams();        
       
        
        
        useEffect(()=>{    
            const datosProductos = categoria ? getProductosByCategoria(categoria) : getProductos()
            datosProductos
                .then((el)=>setItems(el))
                .catch((err)=>{console.log(err)});          
        },[categoria])

       
       
       

        
        return(
            <>
            <div>
                <div>
                    <h2>{title}</h2>
                </div>
               <div className="Lista-Item-Conenedor">
                    {
                    items!== null?
                    items.map((el)=>(
                        <Item key ={el.id}   id= {el.id} imagen= {el.imagen} nombre={el.nombre} precio1={el.precio} stock1={el.stock} detalle1={el.modelo} detalle2={el.fuerza} detalle3={el.consumo} />
                    )):console.log("no llego la data")
                    }
                </div>
                <br/>
                
            </div>
    
            </>
        )
       

}