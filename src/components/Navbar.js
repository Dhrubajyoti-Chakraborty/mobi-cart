import React from 'react';
import shop from "../shop.svg"
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';



class Navbar extends React.Component {


    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={shop} alt="store" className="navbar-brand" />
                
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/' className="nav-link">
                            products
                            </Link>
                        </li>
                    </ul>
                   <Link to='/cart' className="ml-auto">
                       <ButtonContainer>
                           <i className="fas fa-cart-plus" />
                           my cart
                       </ButtonContainer>
                   </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
   color: var(--mainWhite) !important;
   fon-size: 1.3rem;
   text-transform: capitalize !important; 
}
`;





export default Navbar;