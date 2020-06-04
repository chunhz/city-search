import React, { Component } from 'react';
import axios from "axios";

class CitySearch extends Component{
  constructor(props){
    super(props);
    this.state = {
      cityName: '',
      zipArr: [],
    }
  }


componentDidUpdate() {
  
  let cityName = this.state.cityName;
  
  const url = `http://ctp-zip-api.herokuapp.com/city/${cityName}`;
  // console.log(url);
  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      console.log(cityName);
      this.setState({zipArr: data});
    })
    .catch((err) => console.log(err));
}
handleChange = (event) => {
  this.setState({ cityName: event.target.value.toUpperCase()})
}


render() {
  let zipList = this.state.zipArr.map(zip =>{
   return <li>{zip}</li>
  });

  return(
    
    <div>
      
      <h1>City: {this.state.cityName} </h1>
      <input type = "text" placeholder = "Enter City Name Here" 
      onChange={ this.handleChange} />
      {/* <div>
        <button onClick = {this.save} ></button>
      </div> */}
      

      <ul>{zipList}</ul>
      
    </div>
  )
}
}

export default CitySearch;