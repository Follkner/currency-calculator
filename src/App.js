import React, { Component } from "react";
import "./App.css";

import Navigator from './components/Navigator';
import Content from './components/Content';

class App extends Component {

  constructor(props) {
      super(props)
      this.state = {
        data: ''
      }
      this.updateState = this.updateState.bind(this);
  }

  updateState(index) {
      this.setState({data: index})
  }

  render() {
    
    return (
      <div className="App">
        <Navigator 
          update ={this.updateState}
        />
        <Content cont = {this.state.data}/>
        
      </div>
    );
  }

  
}

export default App;
