import React, { Component } from 'react'
import SHOP_DATA from './2.2 shop.data.js';
import {Container,Row} from 'reactstrap';
import Collectionpreview from '../../Components/Collection-preview/Collection-preview.component';

export default class Shop extends Component {
    constructor(props)
    {
        super(props);
        this.state={collections:SHOP_DATA }
    }
    render() {
        return (
              <Container>
                <Row>
                  {this.state.collections.map(({id,...othercollections})=>(<Collectionpreview key={id} {...othercollections} />
                  ))}
             
                 </Row>   
              </Container>  
        )
    }
}
