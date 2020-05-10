import React, { Component } from 'react'
import {Container,Row} from 'reactstrap';
import {selectShopItem} from '../../redux/shop/shop.reselect';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import Collectionpreview from '../../Components/Collection-preview/Collection-preview.component';

 class Shop extends Component {
  
    render() {
        return (
              <Container>
                <Row>
                  {this.props.shop.map(({id,...othercollections})=>(<Collectionpreview key={id} {...othercollections} />
                  ))}
             
                 </Row>   
              </Container>  
        )
    }
}
const mapStateToProps =createStructuredSelector({
    shop: selectShopItem
})
export default connect( mapStateToProps )(Shop)