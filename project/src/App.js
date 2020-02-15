import React from 'react';
import './App.css';
import UserList from './components/UserList';

class App extends React.Component {
  
  constructor() {
    super();
    this.state ={ info :[]
  };}

  componentDidMount() {
    fetch("https://api.github.com/users/wilcoxva")
      .then(res => res.json())
      .then(info => this.setState({ info: info }))
      .catch(err => console.log("Error:", err));
    }
  
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <UserList info={this.state.info} />
        </header>
      </div>
    );
  }
  
}

export default App;
