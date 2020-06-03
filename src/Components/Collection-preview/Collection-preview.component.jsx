import React from 'react';
import {Col} from 'reactstrap'; 
import '../Collection-preview/Collection-preview.style.css';
import {addItems} from '../../redux/cart/cart-action';
import {connect} from 'react-redux';
import CollectionItem from '../Collection-item/CollectionItem.component';

const Collectionpreview =({title,items}) => (
    <React.Fragment>
    <Col md={12} className="text-center mt-5">
        <h1>{title}</h1>
    </Col>
    
{items.filter((items,idx)=> idx <4).map((items)=> <CollectionItem items={items}/>)} 
    
    </React.Fragment>
)
const mapDispatchToprops= dispatch=>({
    addItems:items=>dispatch(addItems(items))
  });
    
    export default connect(null,mapDispatchToprops)(Collectionpreview);
