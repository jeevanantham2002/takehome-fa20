import React, { Component } from 'react'
import Instructions from './Instructions'
import Restaurant from './Restaurant'
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [
        {id: 1, name: "Golden Harbor", rating: 10},
        {id: 2, name: "Potbelly", rating: 6},
        {id: 3, name: "Noodles and Company", rating: 8},
      ],
      inputValue: ""
    }
    this.updateInput = this.updateInput.bind(this);
  }
   
updateInput(event){
this.setState({inputValue : event.target.value})
}
  
addNewResturant = () => {
    var id=this.state.restaurants.length + 1;
    var rating=0;
    var name= this.state.inputValue;
    
  this.state.restaurants.push ({id: id, name: name, rating: rating });
  this.forceUpdate(); 
  // I had to force a re-render because initially it would update the inputvalue state, however, would not display it unless inputvalue was changed again. Therefore, I called a force update to automattically re-render the values when you add a new restaurant and the function is called.
}

  render() {
    return (
      <div className="App">
        <Instructions complete={true} />
        {this.state.restaurants.map(x => (
          <Restaurant id={x.id} name={x.name} rating={x.rating}/>
        ))}
      <input type="text" onChange={this.updateInput}/>
      <br/>
      <input type="submit" onClick={this.addNewResturant}/>
      </div>
    )
  }
}

export default App
