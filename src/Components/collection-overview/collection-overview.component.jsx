import React from 'react'
import {Container,Row} from 'reactstrap';
import {selectCollectionForPreview} from '../../redux/shop/shop.reselect';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import Collectionpreview from '../../Components/Collection-preview/Collection-preview.component';


const Collectionoverview=({shop})=> {
    return (
        <Container>
                <Row>
                  {shop.map(({id,...othercollections})=>(<Collectionpreview key={id} {...othercollections} />
                  ))}
             
                 </Row>   
              </Container>  
    )
}
const mapStateToProps =createStructuredSelector({
    shop: selectCollectionForPreview
})
export default connect(mapStateToProps)(Collectionoverview);