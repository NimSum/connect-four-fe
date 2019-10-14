import React from 'react';
import WorldChat from '../WorldChat';
import { connect } from 'react-redux';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        Connect Four!
        <button onClick={() => props.test('HI')}>TEST</button>
      </header>
      <WorldChat />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
});

export default connect(null, mapDispatchToProps)(App);
