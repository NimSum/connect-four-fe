import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import request from '../../requests';

function Login(props) {
  const [email, setEmail] = useState('nim@sum.com');
  const [password, setPassword] = useState('nimdimsum');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const loginUser = async () => {
    setLoading(true);
    try {
      const user = await request('login', { email, password });
      if (!user.ok) throw await user.json();
    } catch(err) {
      setError(err);
    }
    setLoading(false);
  };

  return (
    <div>
      <input type="email" 
        onChange={({target}) => setEmail(target.value)} 
        placeholder={email}/>
      <input type="text" 
        onChange={({target}) => setPassword(target.value)} 
        placeholder={password}/>
      <h4>{isLoading && 'Logging in...'}</h4>
      <h4>{error.error && error.error}</h4>
      <button onClick={loginUser}>Submit</button>
    </div>
  )
};

const mapDispatchToProps = state => ({

});

export default connect(mapDispatchToProps)(Login);
