
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { faBagShopping} from '@fortawesome/free-solid-svg-icons'
export default function CartWidget(conta){

    
    return(
        <>
            <div>
                <FontAwesomeIcon icon={faBagShopping} />;
                
                <span>0</span>
            </div>
        
        </>




    );




}