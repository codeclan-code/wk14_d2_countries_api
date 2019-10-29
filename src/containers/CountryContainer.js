import React, {Component} from 'react';
import CountrySelect from '../components/CountrySelect';


class CountryContainer extends Component{

  constructor(props){
      super(props);
  }

fetchCountries(){
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

componentDidMount(){
  this.fetchCountries();
}

render(){
  return(
    <div>
    <h1>Hello World</h1>
    <CountrySelect />
    </div>
  )
}
}

export default CountryContainer
