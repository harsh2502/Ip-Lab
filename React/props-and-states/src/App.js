import React, { Component } from 'react'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      name:"Harsh",
      age:15
    }
  }
  render() {
    return (
      <div>
         <h1>Hello {this.props.greet}</h1> 
        <h1>{`${this.state.name} is ${this.state.age}`}</h1>
        <button onClick={()=>this.setState({name:"Hello",age:20})}>Submit</button>
      </div>
    )
  }
}
