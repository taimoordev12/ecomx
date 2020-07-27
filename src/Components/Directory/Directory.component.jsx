import React, { Component } from 'react'
import { Container, Row } from 'reactstrap';
import Menuitem from '../Menu-item/Menu-item.component';
import {selectDirectoryItem} from '../../redux/directory/directory.reselect';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {getDirectories} from '../../redux/directory/directory.action';
class Directory extends Component {
  componentDidMount(){
    this.props.getDirectories();
  }
   
    render() {
        return (
              <Container className='mt-5'>
                <Row>
                  {this.props.sections.map(({title,id,imageUrl,size,linkUrl})=>(<Menuitem key={id} img={imageUrl} link={linkUrl} title={title} size={size} linkUrl={linkUrl}/>
                  ))}
             
                 </Row>     
              </Container>  
        )

    }
}
 const mapStateToProps =createStructuredSelector({
    sections:selectDirectoryItem
 })
export default connect(mapStateToProps,{getDirectories})(Directory)

