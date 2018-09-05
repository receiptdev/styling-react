import React, { Component } from 'react';
import Button from './components/Button';
import StyledButton from './components/StyeldButton';

class App extends Component {
  render() {
    const isBlue = true;
    return (
      <div>
        <StyledButton big>Button</StyledButton>
        <Button>Button</Button>
      </div>
    );
  }
}

export default App;
