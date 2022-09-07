import axios from 'axios';
import React, { useState } from 'react';

const URI = 'http://localhost:8000/login/'

const userContent = {
  user: "",
  password: ""
}

const Login = () => {
  const [state, setState] = useState(userContent);
  // const [files, setFiles] = useState([]);

  const onChange = e => {
    //console.log(e.target.files);
    // setFiles(e.target.files)
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };


  // const navigate = useNavigate()    
  //procedimiento guardar
  const store = async (e) => {
    e.preventDefault()

    const userData = {
      user: state.user,
      password: state.password
    };


    const formData = new FormData();

    formData.append('user', state.user);
    formData.append('password', state.password);

    // Object.values(files).forEach(file => {
    //   formData.append("files", file);
    // });

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
      <div className='col-md-6'>
        <h3>LOGIN</h3>
        <form onSubmit={store}>
          <div className='mb-3'>
            {/* <label className='form-label'>Titulo</label> */}
            <input
              type="text"
              name="user"
              value={state.user}
              onChange={onChange}
              className='form-control'
              placeholder='User'
            />
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={onChange}
              className='form-control'
              placeholder='PassWord'
            />
          </div>
          {/* <div className='mb-3'>
            <input
              type='file'
              id='file'
              name="files"
              multiple
              onChange={onChange}
            />
          </div> */}
          {/* <div className='mb-3'>
            <label className='form-label'>Contenido</label>
            <textarea
              type="text"
              name="content"
              value={state.content}
              onChange={onChange}
              className='form-control'
            />
          </div> */}
          <button type='submit' value='Upload' className='btn btn-primary'>Login In</button>
        </form>
      </div>
    </>
  )
}

export default Login