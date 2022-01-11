import React from 'react'

function ContactUs() {
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
        <b>Email :</b> <a href='mailto:admin@udyamit.in'>admin@udyamit.in</a>
        <br /> <br />
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
                />
              </div>
            </div>
            <div className='col-md-12 col-sm-12'>
              <label for='exampleDataList' class='form-label'>
                Reason
              </label>
              <select class='form-select' aria-label='Default select example'>
                <option value='0' selected>
                  Payment
                </option>
                <option value='1'>Query</option>
                <option value='2'>Admission</option>
                <option value='3'>Exam</option>
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
                />
              </div>
            </div>
          </div>
          <button type='button' className='btn btn-dark'>
            Submit <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
