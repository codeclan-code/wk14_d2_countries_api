import React, {Component} from 'react';
import CountrySelect from '../components/CountrySelect';


class CountryContainer extends Component{

  constructor(props){
      super(props);
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
