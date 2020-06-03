import React from 'react';
import {Col,Row,Container} from 'reactstrap';

const ProductPage=()=>{
return(
<React.Fragment>
    <Container>
        <Row>
            <Col md={3}>
              <img src={img} alt=""/>  
            </Col>
            <Col md={9}>
                
            </Col>
        </Row>
    </Container>
</React.Fragment>
)

}

export default ProductPage;