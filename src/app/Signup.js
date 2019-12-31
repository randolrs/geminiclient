import React, { useState } from 'react';

import { signup } from '../api/auth';


const Signup = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ passwordConfirmation, setPasswordConfirmation ] = useState('');

  const handleSumbit = async () => {
    const res = await signup({
      email,
      password,
      passwordConfirmation
    });
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={ e => setEmail(e.target.value) }
          value={ email }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Password"
          name="password"
          onChange={ e => setPassword(e.target.value)  }
          value={ password }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Password Confirmation"
          password="passwordConfirmation"
          onChange={ e => setPasswordConfirmation(e.target.value)  }
          value={ passwordConfirmation }
        />
      </div>
      <div>
        <span onClick={ handleSumbit }>Signup</span>
      </div>
    </div>
  );
}

export default Signup;
