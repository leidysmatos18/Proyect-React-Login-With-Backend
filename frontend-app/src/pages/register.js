import React, { useState } from 'react';
import axios from 'axios';


const URI = 'http://localhost:8000/register/'

const userRegister = {
  fullName: "",
  user: "",
  email: "",
  password: "",
  verifyPassword: ""
}

const Register = () => {
  const [state, setState] = useState(userRegister);

  const onChange = e => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };


  // const navigate = useNavigate()    
  const store = async (e) => {
    e.preventDefault()

    const formData = new FormData();

    formData.append('fullName', state.fullName);
    formData.append('user', state.user);
    formData.append('email', state.email);
    formData.append('password', state.password);
    formData.append('verifypassword', state.verifyPassword);

    try {
      const res = await axios.post(URI, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },

      });

      console.log(JSON.stringify({ state }));
      console.log(state);

    } catch (err) {
      if (err.response.status === 500) {
        console.log(err);
      } else {
        console.log(err.response.data.msg);
      }
    }

    // navigate('/')
  }

  return (
    <>
      <div className='main-form-user'>
        <div className='form-register'>
          <h3>Sing Up</h3>
          <form onSubmit={store}>
            <div className='mb-3'>
              <input
                type="text"
                name="fullName"
                value={state.fullName}
                onChange={onChange}
                className='form-control'
                placeholder='Full Name'
              />
              <input
                type="text"
                name="user"
                value={state.user}
                onChange={onChange}
                className='form-control'
                placeholder='Username'
              />
                <input
                type="email"
                name="email"
                value={state.email}
                onChange={onChange}
                className='form-control'
                placeholder='Email Address'
              />
              <input
                type="password"
                name="password"
                value={state.password}
                onChange={onChange}
                className='form-control'
                placeholder='Password'
              />
              <input
                type="password"
                name="verifyPassword"
                value={state.verifyPassword}
                onChange={onChange}
                className='form-control'
                placeholder='Confirm Password'
              />
              <input
              type="checkbox"
              name="acceptTerms"
              //  value={state.verifyPassword}
              onChange={onChange}
              className='form-control'
              />
              <label for="acceptTerms" id="text-term">I agree with <a href="url">term of services</a></label>
            </div>
            <button type='submit' className='btn btn-primary'>Register</button>
            <p className='textToGoLogin'>Already a member? <a href="url">Login here</a></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register