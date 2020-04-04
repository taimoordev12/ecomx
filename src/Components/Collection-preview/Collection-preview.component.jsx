import React from 'react';
import {Col} from 'reactstrap'; 
import '../Collection-preview/Collection-preview.style.css';
const Collectionpreview =({title,items,}) => (
    <React.Fragment>
    <Col md={12} className="text-center mt-5">
        <h1>{title}</h1>
    </Col>

    
{items.filter((items,idx)=> idx <4).map((items)=>
<Col  md={3} className="mt-5">
    <img className=" collection-img" Src={items.imageUrl}/>
    <div className="d-flex justify-content-between">
    <p>{items.name}</p>
    <p>{items.price}</p>
    </div>
    </Col>)} 
    
    </React.Fragment>
)
    
    export default Collectionpreview;
