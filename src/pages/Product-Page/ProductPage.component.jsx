import React, { useState } from 'react';
import {connect} from 'react-redux';
import {ClearItems} from '../../redux/cart/cart-action';
import {RemoveItems} from '../../redux/cart/cart-action';
import {addItems} from '../../redux/cart/cart-action';
import {createStructuredSelector} from 'reselect';
import {selectCartItem} from '../../redux/cart/cart.reselect';

const ProductPage=(props)=>{
    const prodData= props.location.state;
    const {removeItem,addItem} = props
    const [count, setCount] = useState(0);
const item =props.cartItems.find((item)=>item.id==prodData.id);
console.log(item);
    console.log(prodData);
return(
<React.Fragment>
   {/*Main layout*/}
<main className="mt-5 pt-4">
  <div className="container dark-grey-text mt-5">
    {/*Grid row*/}
    <div className="row wow fadeIn">
      {/*Grid column*/}
      <div className="col-md-6 mb-4 text-center">
        <img src={prodData.imagesUrls[0]} className="img-fluid" alt="" />
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-md-6 mb-4">
        {/*Content*/}
        <div className="p-4">
          <div className="mb-3">
            <a href>
              <span className="badge purple mr-1">Category 2</span>
            </a>
            <a href>
              <span className="badge blue mr-1">New</span>
            </a>
            <a href>
              <span className="badge red mr-1">Bestseller</span>
            </a>
          </div>
          <p className="lead">
            <span className="mr-1">
<span>Rs. {prodData.price}</span>
            </span>
        
          </p>

         
<p className="lead font-weight-bold">{prodData.name}</p>
<p>{prodData.description ? prodData.description:'' }</p>
{prodData.variants?
          
           <div className="mt-3 mb-3">
                <p className='mb-0'>{prodData.variants.variant1.name}</p>    
               {prodData.variants.variant1 ?
                  
                  <select name="" className='w-50' id="">
                  {prodData.variants.variant1.options.map(option=><option value={option}>{option}</option>)}
                    </select>
                  

               :''}
  <p className='mt-2 mb-0'>{prodData.variants.variant2.name}</p>
{prodData.variants.variant2 ?

                  <select name="" className='w-50' id="">
                  {prodData.variants.variant2.options.map(option=><option value={option}>{option}</option>)}
                    </select>
                    
               :''}

<p className='mt-2 mb-0'>{prodData.variants.variant3.name}</p>
{prodData.variants.variant3 ?

                  <select name="" className='w-50' id="">
                  {prodData.variants.variant3.options.map(option=><option value={option}>{option}</option>)}
                    </select>
                    
               :''}
         
          </div>

          :
          '' }
          <form className="d-flex justify-content-left">
            {/* Default input */}
            <h6 className="mr-5 mt-2"><span className="mr-5 font-weight-bold pointer" onClick={()=>removeItem(prodData)}>&#x276E;</span>{typeof item === 'undefined'? 0 :item.quantity }<span className="ml-5 font-weight-bold pointer" onClick={()=>{addItem(prodData);setCount(count + 1)}}>&#x276F;</span></h6>
            <button className="btn btn-primary btn-md my-0 p" type="submit">Checkout
              <i className="fas fa-shopping-cart ml-1" />
            </button>
          </form>
        </div>
        {/*Content*/}
      </div>
      {/*Grid column*/}
    </div>
    {/*Grid row*/}
    <hr />
    {/*Grid row*/}
    <div className="row d-flex justify-content-center wow fadeIn">
      {/*Grid column*/}
      <div className="col-md-6 text-center">
        <h4 className="my-4 h4">Additional information</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit modi sapiente illo soluta odit
          voluptates,
          quibusdam officia. Neque quibusdam quas a quis porro? Molestias illo neque eum in laborum.</p>
      </div>
      {/*Grid column*/}
    </div>
    {/*Grid row*/}
    {/*Grid row*/}
    <div className="row wow fadeIn text-center">
      {/*Grid column*/}
      {prodData.imagesUrls.map(img=> <div className={`${prodData.imagesUrls.length==1 ?'col-lg-12 d-none col-md-12':''} ${prodData.imagesUrls.length==3 ?'col-lg-4 col-md-12':'col-lg-6 col-md-12'}  mb-4`}>
        <img src={img} className="img-fluid" alt="" />
      </div>)}
    
      {/*Grid column*/}
    </div>
    {/*Grid row*/}
  </div>
</main>

</React.Fragment>
)

}

const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItem,
}

)

const mapDispatchToProps =dispatch => ({
    clearItem:item=>dispatch(ClearItems(item)),
    removeItem:item=>dispatch(RemoveItems(item)),
    addItem:item=>dispatch(addItems(item)),

})

export default  connect(mapStateToProps,mapDispatchToProps)(ProductPage);