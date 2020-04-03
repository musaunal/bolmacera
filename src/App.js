import React, {Component} from 'react';
import './App.css';
import Content from "./Content";

class  App extends Component{
  Content = Content;
  sampleData = null;

  state = {
    index: 1,
  }

  buttonHandler = (event) => {
    let key = this.sampleData.buttonTexts.indexOf(event.target.textContent);    
    this.setState({index: this.sampleData.navigation[key]});
  }

  render () {
    this.sampleData = this.Content[this.state.index];
    return (
      <div className="App">
        <h1> Bol Maceralı Oyun</h1>
        <p className="App-p">{this.sampleData.text}</p>
        <div>
          {this.sampleData.buttonTexts.map(k => <button onClick={this.buttonHandler}>{k}</button>)}
        </div>
        {this.sampleData.finalMesaage != null ? <p className="App-p">{this.sampleData.finalMesaage}</p> : null}
      </div>
    );
  }
}

export default App;
