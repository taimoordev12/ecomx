import React from 'react';
import {Col} from 'reactstrap'; 
import CustomBtn from '../custom-button/custom-button.component';
import {addItems} from '../../redux/cart/cart-action';
import {connect} from 'react-redux';
import '../Collection-item/CollectionItem.style.css';
import {Link} from 'react-router-dom';

const CollectionItem =({items,addItems}) => {
  return (
<React.Fragment>
 <Col  md={3} className="mt-5 ">
      <Link to={{
    pathname: "/product/:"+items.name,
   state:items
       }} ><img className=" collection-img" src={items.imagesUrls[0]}/></Link>
   
    <p>PKR {items.price}</p>

    <p>{items.name}</p>
    <CustomBtn onClick={()=> addItems(items)}>Add to Cart</CustomBtn>

    </Col>
    
    </React.Fragment> )
  }
const mapDispatchToprops= dispatch=>({
    addItems:items=>dispatch(addItems(items))
  });
    
    export default connect(null,mapDispatchToprops)(CollectionItem);