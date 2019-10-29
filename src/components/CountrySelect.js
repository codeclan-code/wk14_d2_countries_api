import React, {Component} from 'react';

class CountrySelect extends Component{


  render(){
    return (<div>
      <select>
      {this.props.countries.map((country, index) => (

        <option>{ country.name}</option>

      ))}
      </select>
      </div>



    )

    // for country in props.countries, take country.name and display
    // as option in select menu.


// return(
//     <div className = "country-select">
//     <select>
//       <option value="volvo">Volvo</option>
//       <option value="saab">Saab</option>
//       <option value="mercedes">Mercedes</option>
//       <option value="audi">Audi</option>
// </select>
//     </div>
//   )
  }
}




export default CountrySelect;
