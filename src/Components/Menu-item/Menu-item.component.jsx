import React from 'react'
import { Col,Button } from 'reactstrap';
import './Menu-item.style.css';
import { withRouter } from 'react-router-dom';


const MenuItem =({title,size,img,link,match,history}) => {
console.log(link);
  return (
<Col  className="text-center mt-5"  md={(size === 6)?6:4} onClick={()=>history.push(`${match.url}${link}`)}  >
<img className="img-fluid" src={img}/>
    <h2>{title}</h2>
    <Button  outline className="buy-btn" >Buy Now</Button>

  </Col>
  )
 
}

export default withRouter(MenuItem);