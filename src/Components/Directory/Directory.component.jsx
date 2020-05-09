import React, { Component } from 'react'
import { Container, Row } from 'reactstrap';
import Menuitem from '../Menu-item/Menu-item.component';

export default class Directory extends Component {
    constructor() {
   super ();
   this.state={sections:[ {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    id: 1,
    linkUrl: 'shop/hats'
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    id: 2,
    linkUrl: 'shop/jackets'
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3,
    linkUrl: 'shop/sneakers'
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    id: 4,
    size:6,
    linkUrl: 'shop/womens'
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    id: 5,
    size:6,
    linkUrl: 'shop/mens'
  }]}

    }
    render() {
        return (
              <Container className='mt-5'>
                <Row>
                  {this.state.sections.map(({title,id,imageUrl,size,linkUrl})=>(<Menuitem key={id} img={imageUrl} link={linkUrl} title={title} size={size} linkUrl={linkUrl}/>
                  ))}
             
                 </Row>   
              </Container>  
        )

    }
}


