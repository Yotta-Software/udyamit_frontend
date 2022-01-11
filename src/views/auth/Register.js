import React from 'react'
import login from '../../asstes/logo/favicon.png'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { config } from '../../config'
import { toast } from 'react-toastify'

function Register() {
  const history = useHistory()
  const [data, setData] = React.useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  })

  const handleRegister = () => {
    if (data.name === '') {
      toast.error('Please enter name!')
      return
    }
    if (data.email === '') {
      toast.error('Please enter email!')
      return
    }
    if (data.password === '') {
      toast.error('Please enter password!')
      return
    }
    if (data.password !== data.cpassword) {
      toast.error('Password and confirm password does not  matched!')
      return
    }
   //config.baseUrl + config.register
      fetch('https://udyamit.in/api/v1/auth/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) 
      }).then(res=>{
        let promise=res.json();
        if(res.status===201){
          promise.then(data=>{
            toast.success('User registered successfully')
            history.push('/login');
          })
        }else{
          promise.then(err=>{
          toast.error(err.error);
          })
        }
      })
  }
  const handleChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }))
  }
  return (
    <div
      className='d-flex justify-content-center '
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
              <i class='far fa-user'></i>
            </span>
            <input
              type='text'
              class='form-control'
              placeholder='Name'
              aria-label='Name'
              aria-describedby='addon-wrapping'
              name='name'
              required
              onChange={handleChange}
            />
          </div>
          <br />
          <div class='input-group flex-nowrap'>
            <span class='input-group-text' id='addon-wrapping'>
              <i class='fas fa-user'></i>
            </span>
            <input
              type='email'
              class='form-control'
              placeholder='Email'
              aria-label='Username'
              aria-describedby='addon-wrapping'
              name='email'
              required
              onChange={handleChange}
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
              aria-label='Password'
              required
              aria-describedby='addon-wrapping'
              name='password'
              onChange={handleChange}
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
              required
              placeholder='Confirm Password'
              aria-label='cPassword'
              aria-describedby='addon-wrapping'
              name='cpassword'
              onChange={handleChange}
            />
          </div>
          <br />
          <button
            type='button'
            class='btn btn-dark form-control'
            onClick={handleRegister}
          >
            Register <i class='fas fa-long-arrow-alt-right'></i>
          </button>
          <br />
          <br />
          <button
            type='button'
            class='btn btn-danger form-control'
            onClick={() => history.push('/login')}
          >
            Have an Account ? Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register
