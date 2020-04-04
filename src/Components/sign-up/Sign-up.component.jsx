import React, { Component } from 'react'
import {firebaseAppAuth ,createUserProfileDocument } from '../../firebase/firebase.util';
import {Alert, Form, FormGroup, Label, Input } from 'reactstrap';

import CustomBtn from '../custom-button/custom-button.component';
import {Col} from 'reactstrap';

export default class Signup  extends Component {
    constructor(){
        super();
        this.state= {
            displayName:'',
            email:'',
            password:'',
            Cpassword: '',
            success:false
        }

    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value});
    }
     HandleSubmit = async event=> {
     event.preventDefault();
     const {displayName,email, password,Cpassword} = this.state;
     if(password !== Cpassword) {
         alert ('Password does not match');
         return;
     }
     try {
         const {user}= await firebaseAppAuth.createUserWithEmailAndPassword(email,password);
          await  createUserProfileDocument(user,{displayName});
          this.setState({success:true});
        this.setState({
            displayName:'',
            email:'',
            password:'',
            Cpassword: ''
        });

     } catch (error) 
     {
        alert(error);
     }


    }
    render() {
        const {displayName,email, password,Cpassword} = this.state;

        return (
            <Col md={6} className="mt-5">
                   <h3>Register with us</h3>
        <span className="mt-3" >Sign up with your email</span>
            <Form onSubmit={this.HandleSubmit}>
                <FormGroup>
              <Label for="Name">Name</Label>
              <Input type="text" name="displayName" id="displayName" placeholder="Enter your Name" value={displayName} onChange={this.handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="Email">Email</Label>
              <Input type="email" name="email" id="Email" placeholder="Enter your email" value={email} onChange={this.handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="Password">Password</Label>
              <Input type="password" name="password" id="Password" placeholder="Enter Password"  value={password} onChange={this.handleChange} required/>
            </FormGroup>
            <FormGroup>
              <Label for="Password">Confirm Password</Label>
              <Input type="password" name="Cpassword" id="CPassword" placeholder="Enter password again"  value={Cpassword} onChange={this.handleChange} required/>
            </FormGroup>
           
            <CustomBtn type="Submit">Submit</CustomBtn>

            </Form>
            {this.state.success ?  <Alert color="success mt-3">
       Your Account is created Successfully- Happy shopping
      </Alert>: ''}
            </Col>
        )
    }
}
