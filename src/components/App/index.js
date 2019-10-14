import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WorldChat from '../WorldChat';
import { connect } from 'react-redux';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        Connect Four!
        <button onClick={() => props.test('HI')}>TEST</button>
      </header>
      <Route 
        exact path='/home'
        render={(() => {
          return (
            <div>
              <WorldChat />
              
            </div>)
        })}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
});

export default connect(null, mapDispatchToProps)(App);
