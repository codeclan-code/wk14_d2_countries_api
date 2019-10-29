import React, {Component} from 'react';
import CountrySelect from '../components/CountrySelect';


class CountryContainer extends Component{
  constructor(props){
      super(props);
      this.state = {
        countries: []
      }
  }

  componentDidMount(){
    this.fetchCountries();
  }

  fetchCountries() {
  fetch(`https://restcountries.eu/rest/v2/all`)
    .then(response => response.json())
    .then(data =>
    this.setState({
      countries: data,
isLoading: false,
    })
  )

.catch(error => this.setState({ error, isLoading: false}));

}
render(){
  return(
    <div>
    // <h1>Hello World</h1>
    <CountrySelect countries={this.state.countries}/>
    </div>
  )
}
}



export default CountryContainer
