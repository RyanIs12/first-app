import React, {
  Component
} from 'react';
import Board from './components/Board';
import './App.css';

class App extends Component {
  render() {
    return ( <Board onClick={this.handleClick} test="test by Mihai"/> )
  }

  handleClick(i) {
    console.log("Handle click in App", i);
  }
}

export default App;
