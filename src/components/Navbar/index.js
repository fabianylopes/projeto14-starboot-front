import { useNavigate } from "react-router-dom";

import { Nav, HomeLogo, Brand, Options, Coffee, Bag } from "./style";
import Logo_Small from "../../assets/logo-small.js";

function Navbar({colorCoffee, colorBag}){
    const redirectUser = useNavigate()

    return(
        <Nav>
            <HomeLogo onClick={()=> redirectUser('/')}>
            <Brand>
                {Logo_Small}
            </Brand>
            </HomeLogo>
            
            <Options>
                <Coffee colorCoffee={colorCoffee} onClick={()=> redirectUser('/coffees')}>CAFÉS</Coffee>
                <Bag colorBag={colorBag} onClick={()=> redirectUser('/bag')}>SACOLA</Bag>
            </Options>
        </Nav>
    )
}

export default Navbar;