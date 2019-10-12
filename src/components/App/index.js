import React from 'react';
import { mockAction } from '../../actions';
import { connect } from 'react-redux';
import subscribeToTimer from '../../websocket-api';

function App(props) {

  subscribeToTimer((err, timestamp) => props.test(timestamp));
  
  return (
    <div className="App">
      <header className="App-header">
        Connect Four!
        <button onClick={() => props.test('HI')}>TEST</button>
      </header>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  test: data => dispatch(mockAction(data))
});

export default connect(null, mapDispatchToProps)(App);
