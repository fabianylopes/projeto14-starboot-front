import { useNavigate } from "react-router-dom";

import { Nav, HomeLogo, Brand, Options, Coffee, Bag } from "./style";
import Logo from '../../assets/logo.png';

function Navbar({colorCoffee, colorBag}){
    const redirectUser = useNavigate()

    return(
        <Nav>
            <HomeLogo onClick={()=> redirectUser('/')}>
            <Brand src={Logo}/>
            </HomeLogo>
            
            <Options>
                <Coffee colorCoffee={colorCoffee} onClick={()=> redirectUser('/coffees')}>CAFÉS</Coffee>
                <Bag colorBag={colorBag} onClick={()=> redirectUser('/bag')}>SACOLA</Bag>
            </Options>
        </Nav>
    )
}

export default Navbar;