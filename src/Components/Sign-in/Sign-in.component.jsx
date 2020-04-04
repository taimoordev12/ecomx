import React, { Component } from 'react'
import {Col} from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import CustomButton from '../custom-button/custom-button.component'
import {firebaseAppAuth,SignInWithGoogle} from '../../firebase/firebase.util.js';



export default class Signin extends Component {
    constructor(){
        super();
      this.state={
          email: '',
          password: ''

      }
    
    }
    HandleSubmit = async event => {
        event.preventDefault();
       const {email,password}= this.state;
       try {
        await  firebaseAppAuth.signInWithEmailAndPassword(email,password);
        this.setState({email:'',password:''});
       } catch(error) {
         alert(error);

       }
      
     }
     HandleChange = event => {
         const {name, value} = event.target;
         this.setState({[name]:value});
     }
    render() {
        return (
        <Col md={6} className="mt-5">
        <h3>I already have an account</h3>
        <span >Sign in with your email</span>
        <Form onSubmit={this.HandleSubmit} >
        <FormGroup>
        <Label for="exampleEmail" >Email</Label>
        <Input name="email" type="email" onChange={this.HandleChange} value={this.state.email}   required />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail" >Password</Label>
        <Input  name="password" type="password" onChange={this.HandleChange} value={this.state.password}   required />
      </FormGroup>
      <CustomButton type="Submit">Submit</CustomButton>
      <CustomButton type="Submit" onClick={SignInWithGoogle} isGooglebtn>Sign in with google</CustomButton>

       </Form>
        </Col>

        )
    }
}
