import React from 'react'
import { Col,Button } from 'reactstrap';
import './Menu-item.style.css';
import { withRouter } from 'react-router-dom';


const MenuItem =({title,size,img,linkurl,match,history}) => (
<Col  className="text-center mt-5"  md={(size === 6)?6:4} onClick={()=>history.push(`${match.url}${linkurl}`)}  >
<img className="img-fluid" src={img}/>
    <h2>{title}</h2>
    <Button  outline className="buy-btn" >Buy Now</Button>

  </Col>
 
        )

export default withRouter(MenuItem);