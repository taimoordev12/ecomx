import React from 'react';
import {Col} from 'reactstrap'; 
import CustomBtn from '../custom-button/custom-button.component';
import {addItems} from '../../redux/cart/cart-action';
import {connect} from 'react-redux';
import '../Collection-item/CollectionItem.style.css';
const CollectionItem =({items,addItems}) => (
    <React.Fragment>
 <Col  md={3} className="mt-5 ">
    <img className=" collection-img" src={items.imageUrl}/>
   
    <p>PKR {items.price}</p>

    <p>{items.name}</p>
    <CustomBtn onClick={()=> addItems(items)}>Add to Cart</CustomBtn>

    </Col>
    
    </React.Fragment>
)
const mapDispatchToprops= dispatch=>({
    addItems:items=>dispatch(addItems(items))
  });
    
    export default connect(null,mapDispatchToprops)(CollectionItem);