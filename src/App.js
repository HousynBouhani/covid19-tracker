import React, { Component } from 'react'
import Header from './components/header/Header';
import {getStatSummary,getCountries} from './api';
import Cards from './components/statsCards/Cards';
import Chart from './components/chart/Chart'




export default class App extends Component {

  state = {
    data:{},
    countries:null,
  }

 async componentDidMount(){
  const fetchedData = await getStatSummary();
  const getCountriesData = await getCountries();

  this.setState({data:fetchedData,countries:getCountriesData});  
 
  }


  handleCountryChange = (country) =>{
    const getData = async()=> {
    const fetchedData = await getStatSummary(country);
    this.setState({data:fetchedData})
    }
    getData();
  }
  

  render() {
    const {data,countries} = this.state;

    return (
      <div className="container">
        <Header/>
        <Cards data={data} handleCountryChange={this.handleCountryChange} countries={countries}/> 
        <Chart data={data}/>
      </div>
    )
  }
}
