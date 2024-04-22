import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget'


export default function MenuNavegacion(){

    
    return(
        <> 
          <nav>

            <div>   
               <button className="boton-Item-Producto">
                    <Link to='/categorias/Maquinas'>Maquinas</Link>
                 </button>           
                <button className="boton-Item-Producto">
                    <Link to='/categorias/Repuestos'>Repuestos</Link>
                </button>            
            </div>
                
            <CartWidget ></CartWidget>   
         </nav>
        </> 
    );
}