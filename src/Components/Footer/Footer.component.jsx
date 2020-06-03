import React from 'react';
import '../../Components/Footer/Footer.style.css';
import {selectDirectoryItem} from '../../redux/directory/directory.reselect';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import { Link} from "react-router-dom";

const Footer=({match,sections})=>{
   
      return (
  
        <footer className="page-footer font-small blue pt-5 text-white bg-footer mt-5">
          {/* Footer Links */}
          <div className="container-fluid text-center text-md-left">
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-6 mt-md-0 mt-3">
                {/* Content */}
                <h5 className="text-uppercase">Ecomx</h5>
                <p>A fully self serviced Ecommerce Store</p>
              </div>
              {/* Grid column */}
              <hr className="clearfix w-100 d-md-none pb-3" />
              {/* Grid column */}
              <div className="col-md-3 mb-md-0 mb-3">
                {/* Links */}
                <h5 className="text-uppercase ">Catagories</h5>
                <ul className="list-unstyled text-white">
                {sections.map(({title,linkUrl})=>(
                   <li>
                   <Link to={linkUrl} className="text-white mt-1">{title}</Link>
                 </li>
                  ))}
                </ul>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 mb-md-0 mb-3">
                {/* Links */}
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-white">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 2</a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">Link 3</a>
                  </li>
                  <li>
                    <a href="#!"className="text-white">Link 4</a>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
          {/* Footer Links */}
          {/* Copyright */}
          <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="/" className="text-white"> Ecomx</a>
          </div>
          {/* Copyright */}
        </footer>
      )

}

const mapStateToProps =createStructuredSelector({
  sections:selectDirectoryItem
})
export default connect(mapStateToProps)(Footer)