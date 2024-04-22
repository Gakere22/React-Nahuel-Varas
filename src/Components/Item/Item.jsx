
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


export default function Item({ id,imagen, nombre, precio, stock1}){



return(
        <>{ stock1 > 0 ?
            <div className="item-Producto">
                <div className="item-Producto-Imagen-Contenedor">
                <img src= {imagen} className="item-Producto-Imagen" ></img>
                </div>
                <div className="item-Producto-Descripcion">
                    <span className="item-Producto-Descripcion-Texto">{nombre}</span>
                    <br />
                    <span className="item-Producto-Descripcion-Texto">Precio {precio}</span>
                    <br/>
                    <span className="item-Producto-Descripcion-Texto">Stock {stock1}</span>
                    <br/>
                    <button  className="boton-Item-Producto">
                        <Link to={`/productos/${id}`}> Detalle</Link> 
                    </button>
                    
                </div> 
            </div>
            : 
            <div className="item-Producto">
            <div className="item-Producto-Imagen-Contenedor">
            <img src= {imagen} className="item-Producto-Imagen" ></img>
            </div>
            <div className="item-Producto-Descripcion">
                <span className="item-Producto-Descripcion-Texto">{nombre}</span>
                <br />
                <span className="item-Producto-Descripcion-Texto">Precio {precio}</span>
                <br/>
                <span className="item-Producto-Descripcion-Texto">Stock {"No disponible"}</span>
                <button  className="boton-Item-Producto">
                    <Link to={`/productos/${id}`}> Detalle</Link> 
                
                </button>
               
            </div> 
            </div>

             }
        </>

    );


}