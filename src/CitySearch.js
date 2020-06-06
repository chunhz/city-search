
import React, { Component } from 'react'
import axios from 'axios'
class CitySearch extends Component{
    constructor(props){
        super(props);
        this.state = {
            zipArr: [],
            
            infoArr: [],
            zipCode: '',
            stateName: '',
            lat: '',
            long: '',
            estPop: '',
            totalWages:''
        }
    }

    handleChange = (event) =>{
      const cityName = event.target.value.toUpperCase();
      const link = 'http://ctp-zip-api.herokuapp.com/city/'+ cityName;
       
      axios
      .get(link)
      .then((response) => {
        // data is an array containing objects
        const data = response.data;
        this.setState({ zipArr: data}); // transforming data into array
        console.log(this.state.zipArr)
      })
      .catch((err) => console.log(err));

      // ----------------------Zip Code Search API-----------------------//
      const zipLink = 'http://ctp-zip-api.herokuapp.com/zip/' + this.state.zipArr[0];
    // console.log(zipLink)
    // )
  
    axios
    .get(zipLink)
    .then((res) => {
      // data is an array containing objects
      const json = res.data;
      this.setState({infoArr : json}); // transforming data into array
      // console.log(this.state.zipArr)
    })
    .catch((err) => console.log(err));
  }
  handleCityInfo = () => {
    // this.state.zipArr.sort().map(zip => 
    const zipLink = 'http://ctp-zip-api.herokuapp.com/zip/' + this.state.zipArr[0];
    // console.log(zipLink)
    // )
  
    axios
    .get(zipLink)
    .then((res) => {
      // data is an array containing objects
      const json = res.data;
      this.setState({infoArr : json}); // transforming data into array
      // console.log(this.state.zipArr)
    })
    .catch((err) => console.log(err));
  }
    render(){
    var zipList = this.state.zipArr.sort().map(zip=> <a>"{zip}", </a>);
        return(
            <div>
                <h1>City Name:</h1>
                <input type="text" placeholder="Enter City Name Here" onChange={ this.handleChange }/> 
                <p>{zipList}</p>
            </div>  
        )
    }
}

export default CitySearch;