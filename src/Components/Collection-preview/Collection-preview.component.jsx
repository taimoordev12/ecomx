import React from 'react';
import {Col} from 'reactstrap'; 
import '../Collection-preview/Collection-preview.style.css';
import CustomBtn from '../custom-button/custom-button.component';
import {addItems} from '../../redux/cart/cart-action';
import {connect} from 'react-redux';

const Collectionpreview =({title,items,addItems}) => (
    <React.Fragment>
    <Col md={12} className="text-center mt-5">
        <h1>{title}</h1>
    </Col>
    
{items.filter((items,idx)=> idx <4).map((items)=>
<Col  md={3} className="mt-5 ">
    <img className=" collection-img" Src={items.imageUrl}/>
   
    <p>PKR {items.price}</p>

    <p>{items.name}</p>
    <CustomBtn onClick={()=> addItems(items)}>Add to Cart</CustomBtn>

    </Col>)} 
    
    </React.Fragment>
)
const mapDispatchToprops= dispatch=>({
    addItems:items=>dispatch(addItems(items))
  });
    
    export default connect(null,mapDispatchToprops)(Collectionpreview);
