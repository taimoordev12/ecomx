import React, { useState } from 'react';
import {firebaseAppAuth} from '../../firebase/firebase.util';
import '../Header/Header.style.css';
import {connect} from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 
} from 'reactstrap';

const Header = ({currentuser}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Ecomx</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/shop">Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/shop">Contact us</NavLink>
            </NavItem>
            {currentuser ?
             <NavItem>
             <div className="sign-btn" onClick={()=>firebaseAppAuth.signOut()}>Sign Out</div>
           </NavItem> :
           <NavItem>
           <NavLink href="/signin">Sign In</NavLink>
         </NavItem>
          }
           
           
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

const mapStateToProps =state=>({
  currentuser:state.user.currentuser
})
export default connect(mapStateToProps)(Header);