import React from 'react'

const CountryPicker = ({handleCountryChange,countries}) => {

 
    return (

        <div className="d-flex justify-content-center">
         <select className="custom-select custom-select-sm mx-auto col-sm-4" defaultValue="" onChange={(e)=> handleCountryChange(e.target.value)}>
        <option value="" >Global</option>
        {countries != null ? countries.map((country,index) =>  <option defaultValue={country} key={index}>{country}</option>): null}
        </select>
        </div>
    )
   
    
}

export default CountryPicker
