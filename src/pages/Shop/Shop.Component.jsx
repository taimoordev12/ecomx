import React  from 'react'
import Collection from '../collection/collection.component';
import Collectionoverview from '../../Components/collection-overview/collection-overview.component';
import {Route} from 'react-router-dom';
 const Shop=({match})=> {
     return (
         <React.Fragment>
            <Route exact  path={`${match.path}`} component={Collectionoverview}/>  
            <Route path={`${match.path}/:collectonId`} component={Collection} /> 

            </React.Fragment>
        )
 
}

export default Shop;