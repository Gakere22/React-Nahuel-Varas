import React from "react";
import { useEffect, useState }  from "react";
import { getProductoId } from "../../asyncMonk";
import { useParams } from "react-router-dom";
import DetalleItem from "../DetalleItem/DetalleItem";


export default function ItemDetailContainer(){


const [prod, setProd] = useState(null);
const { productoId } = useParams()

const idPro = parseInt(productoId);


useEffect(()=>{
    getProductoId(idPro)
        .then((pro)=>{setProd(pro)})
        .catch((err)=>{console.Log(err)})
},[productoId]);



return(
<>
    <div>
        {
        prod!==null?<DetalleItem prod={prod}   />:<span></span>        
        }
    </div>  
</>
)
}
