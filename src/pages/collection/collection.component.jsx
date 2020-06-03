import React from 'react'
import {selectCollection} from '../../redux/shop/shop.reselect';
import {connect} from 'react-redux';
import {Col,Row,Container} from 'reactstrap';
import CollectionItem from '../../Components/Collection-item/CollectionItem.component';

 const Collection=({collection})=> {
const {title, items} = collection;
    return (
        <Container className="mt-5">
          <Row>
    <Col><h2 className="text-center">{title}</h2></Col>
          </Row>
        
        <Row>
          {items.map((item)=><CollectionItem items={item}/>)}
        </Row>
      </Container>

    )
}

const mapStateToProps =(state,ownProps)=>({
  collection:selectCollection(ownProps.match.params.collectonId)(state)
}
)
export default connect(mapStateToProps)(Collection);
