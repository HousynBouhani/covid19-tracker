import React, { Fragment } from 'react';
import './HeaderStyles.css'
import image from '../../images/covid19-icon.svg';


const Header = () =>  {

    return (
        <Fragment >
          <div className="d-flex justify-content-center align-items-center mt-5">
          <img className="covidIcon mr-3" src={image} alt="covid19 icon"/>
          <h1 className="title">Covid-19 Tracker</h1>
          </div>
  
        </Fragment>
    )
}

export default Header;
