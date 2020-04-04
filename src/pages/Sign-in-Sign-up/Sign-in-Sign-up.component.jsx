import React from 'react';
import Signin from '../../Components/Sign-in/Sign-in.component';
import {Container,Row} from 'reactstrap';
import Signup from '../../Components/sign-up/Sign-up.component';

const Signinpage =()=> {
return (

    <Container>
        <Row>
        <Signin/>
        <Signup/>
        </Row>
       </Container>
)


}
export default Signinpage;