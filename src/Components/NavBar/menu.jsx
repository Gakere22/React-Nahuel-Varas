import CartWidget from '../CartWidget/CartWidget'

export default function Menu(){

    return(
        <>
            <nav>
                <hi> logo </hi>
                <ul className="nav-bar">
                    <li className="item-nav-bar"  >
                        <a aria-current="page" href="">Maquinas</a> 
                    </li>
                    <li className="item-nav-bar"  >
                        <a aria-current="page" href="">Repuestos</a>    
                    </li>
                </ul>
                <CartWidget></CartWidget>
                
            </nav>
        </> 
    );
}