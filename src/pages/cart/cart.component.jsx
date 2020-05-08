import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import {selectCartItem} from '../../redux/cart/cart.reselect';
import {selectCartTotal} from '../../redux/cart/cart.reselect';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CartPageItem from '../../Components/cart-page-item/cart-page-item.component';




const cart=({cartItems,cartTotal}) => {
    return (
      <React.Fragment>
        <Container className="mt-5 mt-5">
      <Row>
        <Col   md="3"><h3>Product</h3></Col>
        <Col className="text-center" md="3"><h3>Description</h3></Col>
        <Col className="text-center" md="3"><h3>Price</h3></Col>
        <Col className="text-center" md="2"><h3>Quantity</h3></Col>
        <Col className="text-center" md="1"><h3>Remove</h3></Col>
       </Row>
      </Container>
      
       {cartItems.map((cartItem)=><CartPageItem key={cartItem.id} cartItems={cartItem}/>)}
       <Container>
         <Row>   
          <Col md="12" className="text-right mt-5"><h3>total:${cartTotal}</h3></Col>
        </Row>
        </Container>
       </React.Fragment>
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItem,
    cartTotal:selectCartTotal
}

)
export default connect(mapStateToProps,null)(cart);
