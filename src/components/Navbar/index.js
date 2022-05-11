import { Nav, HomeLogo, Brand, Options, Option } from "./style"
import Logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";

function Navbar(){
    const redirectUser = useNavigate()

    return(
        <Nav>
            <HomeLogo onClick={()=> redirectUser('/')}>
            <Brand src={Logo}/>
            </HomeLogo>
            
            <Options>
                <Option onClick={()=> redirectUser('/coffees')}>CAFÉS</Option>
                <Option onClick={()=> redirectUser('/bag')}>SACOLA</Option>
            </Options>
        </Nav>
    )
}

export default Navbar