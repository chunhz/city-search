
import React, { Component } from 'react'
import axios from 'axios'
class CitySearch extends Component{
    constructor(props){
        super(props);
        this.state = {
            zipArr: []      
        }
    }

    handleChange = (event) =>{
        
      let cityName = event.target.value.toUpperCase();
      let link = 'http://ctp-zip-api.herokuapp.com/city/'+ cityName;
       
      axios
      .get(link)
      .then((response) => {
        // data is an array containing objects
        const data = response.data;
        this.setState({ zipArr: data}); // transforming data into array
        console.log(this.state.zipArr)
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