
import { useState } from "react";
import { useContador } from "../../hook/useContador";

export default function DetalleItem({prod}){
  
    
    const {valor, incrementar, decrementar, reiniciar} = useContador(1,0,10);

    
    
        return(
            <> {prod!==undefined?
            <div className="item-Producto-Detalle">
                <div className="item-Producto-Imagen-Contenedor">
                <img src= {prod.imagen} className="item-Producto-Imagen" ></img>
                </div>
                <div className="item-Producto-Descripcion">
                    <span className="item-Producto-Descripcion-Texto">{prod.nombre}</span>
                    <br />
                    <span className="item-Producto-Descripcion-Texto">Modelo {prod.modelo}</span>
                    <br/>
                    <span className="item-Producto-Descripcion-Texto">Fuerza {prod.fuerza}</span>
                    <br/>
                    <span className="item-Producto-Descripcion-Texto">Consumo {prod.consumo}</span>
                    <div>
                        <span className="item-Producto-Descripcion-Texto">{valor}</span>
                        <br/>
                        <button className="botonItemDetalle" onClick={incrementar}>+</button>
                        <button className="botonItemDetalle" onClick={reiniciar}>Agregar al Carrito</button>
                        <button className="botonItemDetalle" onClick={decrementar}>-</button>
                    </div>

                </div>
            </div> : <span></span>
                }
            </>
        )

}