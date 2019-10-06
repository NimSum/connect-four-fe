import React from 'react';
import { mockAction } from '../../actions';
import { connect } from 'react-redux';

function App(props) {
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
