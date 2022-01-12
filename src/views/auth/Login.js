import React from 'react'
import login from '../../asstes/logo/favicon.png'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../../auth/auth'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { config } from '../../config';
import axios from 'axios';

function Login() {
  const history = useHistory()
  const auth = getAuth(app)
  const [data, setData] = React.useState({
    email: '',
    password: '',
  })

  const handleLogin =  () => {
    if (data.email === '') {
      toast.error('Please enter email!')
      return
    }
    if (data.password === '') {
      toast.error('Please enter password!')
      return
    }//`${config.baseUrl}/api/v1/auth/register`
    fetch(`${config.baseUrl}/api/v1/auth/login`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
    }).then(res=>{
      let promise=res.json();
      if(res.status===200){
        promise.then(data=>{
           localStorage.setItem('userInfo', JSON.stringify(data));
           history.push('/creers');
           window.location.reload();
        })
      }else{
        promise.then(err=>{
        toast.error(err.error);
        })
      }
    })
  }

  return (
    <div
      className='d-flex justify-content-center'
      style={{
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div class='card'>
        <center>
          <img
            src={login}
            alt='login'
            style={{
              width: 60,
              marginTop: 10,
            }}
          />
        </center>
        <div class='card-body'>
          {/* <h5 class="card-title">Login</h5> */}
          <div class='input-group flex-nowrap'>
            <span class='input-group-text' id='addon-wrapping'>
              <i class='fas fa-user'></i>
            </span>
            <input
              type='email'
              class='form-control'
              placeholder='Email Id'
              required
              aria-label='Username'
              aria-describedby='addon-wrapping'
              onChange={(e) =>
                setData((p) => ({ ...p, email: e.target.value }))
              }
            />
          </div>
          <br />
          <div class='input-group flex-nowrap'>
            <span class='input-group-text' id='addon-wrapping'>
              <i class='fas fa-key'></i>
            </span>
            <input
              type='password'
              class='form-control'
              placeholder='Password'
              required
              aria-label='Password'
              aria-describedby='addon-wrapping'
              onChange={(e) =>
                setData((p) => ({ ...p, password: e.target.value }))
              }
            />
          </div>
          <p
            class='fst-italic text-danger'
            style={{ textAlign: 'right',cursor:'pointer' }}
            onClick={() => history.push('/reset')}
          >
            forget password?
          </p>

          <button
            type='button'
            class='btn btn-dark form-control'
            onClick={handleLogin}
          >
            Login <i class='fas fa-long-arrow-alt-right'></i>
          </button>
          <br />
          <br />
          <button
            type='button'
            class='btn btn-success form-control'
            onClick={() => history.push('/reg')}
          >
            New user ? Register 
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
