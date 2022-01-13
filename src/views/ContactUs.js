import React ,{useState} from 'react'
import { toast } from 'react-toastify';
import { config } from '../config';
function ContactUs() {
  const [name,setName]=useState('');
  const [reason,setReason]=useState('');
  const [email,setEmail]=useState('');
  const [number,setNumber]=useState('');
  const [message,setMessage]=useState('');
  const handleSubmit = ()=>{
    if(name===''|| email===''|| reason===''|| number===''|| message==='' ){
      return  toast.error('Please fill all fields !');
    }
    fetch(`${config.baseUrl}/contactus`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({  name,
        reason,
        email,
        number,
        message,
      }) 
    }).then(res=>{
      let promise=res.json();
      if(res.status===200){
        promise.then(data=>{
          console.log(data);
          toast.success('Your request is successfully submitted ,We will contact you soon !');
        })
      }else{
        promise.then(err=>{
        toast.error(err.message);
        })
      }
    })
  }
  return (
    <div class='container' style={{ width: '50%' }}>
      <center>
        <h1>Contact Us</h1>
      </center>
      <p>
        <b>Address:</b> 70/1/2 Marble Market, Vinayak Ceramic Building, NG
        Marble Building, Gali no. 25, Mangolpur Kalan, Sector 2 Rohini, New
        Delhi - 110085
      </p>
      <p>
        <b>Phone</b> : <a href='tel:+91 9315590050'>+91 9815880885</a>
      </p>
      <p>
        {/*  <a href='mailto:admin@udyamit.in'>admin@udyamit.in</a> */}
        <b>Email :</b>
        <a href='mailto:udyamit@gmail.com'>udyamit@gmail.com</a>
      </p>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>Contact Us</h5>
          <h5 className='card-title'>शिकायत / शुझाव / सहायता</h5>
          <div className='row'>
            <div className='col-md-12 col-sm-12'>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Enter your name'
                  name='role'
                  required
                  value={name}
                  onChange={e=>setName(e.target.value)}
                />
              </div>
            </div>
            <div className='col-md-12 col-sm-12'>
              <label for='exampleDataList' class='form-label'>
                Reason
              </label>
              <select class='form-select' aria-label='Default select example' onChange={e=>setReason(e.target.value)}>
                <option value='Payment' selected>
                  Payment
                </option>
                <option value='Query'>Query</option>
                <option value='Admission'>Admission</option>
                <option value='Exam'>Exam</option>
              </select>
            </div>
            <div className='col-md-12 col-sm-12'>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  className='form-control'
                  placeholder='enter your email'
                  name='experience'
                  required
                  value={email}
                  onChange={e=>setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className='col-md-12 col-sm-12'>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Number
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='enter your phone number'
                  name='experience'
                  required
                  value={number}
                  onChange={e=>setNumber(e.target.value)}
                />
              </div>
            </div>
            <div className='col-md-12 col-sm-12'>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Message
                </label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='write your message'
                  name='experience'
                  required
                  value={message}
                  onChange={e=>setMessage(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button type='button' className='btn btn-dark'onClick={handleSubmit}>
            Submit <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
