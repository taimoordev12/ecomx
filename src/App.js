import React, { Component } from 'react';
import HomePage from './pages/HomePage/HomePage.component';
import {Route,Switch,Redirect} from 'react-router-dom';
import Shop from './pages/Shop/Shop.Component';
import Header from './Components/Header/Header.component';
import Signinpage from './pages/Sign-in-Sign-up/Sign-in-Sign-up.component';
import {firebaseAppAuth} from './firebase/firebase.util';
import {createUserProfileDocument} from './firebase/firebase.util';
import {connect} from 'react-redux';
import cart from './pages/cart/cart.component';
import {setCurrentUser} from './redux/user/user-actions';
import {selectCurrentUser} from './redux/user/user.reselect';
import {createStructuredSelector} from 'reselect'
import Footer from './Components/Footer/Footer.component';
import Checkout from './pages/Checkout/Checkout.component';
import Success from './pages/Success/Success.component';
import  ProductPage from '../src/pages/Product-Page/ProductPage.component';
class App extends Component {
 
  unSubscribeFromAuth = null;
  componentDidMount(){
    

    this.unSubscribeFromAuth=firebaseAppAuth.onAuthStateChanged( async Authuser=>{
     if (Authuser) {
         const userRef = await createUserProfileDocument(Authuser);
         userRef.onSnapshot(snapshot=>{
          this.props.setCurrentUser({
            currentuser:{
              id: snapshot.id,
               ...snapshot.data()
            }
          });

         });
         
     } else
     {
      this.props.setCurrentUser(Authuser);
     }
  })

  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render()
   { 
     return (
    <React.Fragment>
    <Header />
    <Switch>
 <Route exact path='/' component={HomePage}/>
 <Route path='/shop' component={Shop}/>
 <Route path='/cart' component={cart}/>
 <Route path='/checkout' component={Checkout}/>
 <Route path='/Success' component={Success}/>
 <Route path='/product/:collectionId' component={ProductPage}/>




 <Route exact path='/signin' render={()=>this.props.currentuser ? <Redirect to='/' />:<Signinpage></Signinpage>}/>
 </Switch>
 <Footer/>

 </React.Fragment>

)}
}
const mapStateToProps=createStructuredSelector({
  currentuser:selectCurrentUser
})
const mapDispatchToprops= dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToprops)(App);
