import React from 'react'
import f1 from '../../asstes/Certificate/1.jpg'
import f2 from '../../asstes/Certificate/2.jpg'
import f3 from '../../asstes/Certificate/3.jpg'
import f4 from '../../asstes/Certificate/4.jpg'
import f5 from '../../asstes/Certificate/5.jpg'
import f6 from '../../asstes/Certificate/6.jpg'
import f7 from '../../asstes/Certificate/7.jpg'
import f8 from '../../asstes/Certificate/8.jpg'
import f9 from '../../asstes/Certificate/9.jpg'
import f10 from '../../asstes/Certificate/10.jpg'
import f11 from '../../asstes/Certificate/11.jpg'

import f12 from '../../asstes/Certificate/12.jpg'
function Legal() {
  return (
    <div>
      <div className='container mt-4 bg-dark text-white '>
        <div className='row'>
          <div className='col-md-12'>
            <center>
              <h1>Documents & Certifications</h1>
            </center>
          </div>
        </div>
      </div>

      <div className='container-fluid mt-3 mb-5 legal'>
        <div className='row'>
          <div className='col-md-4'>
            <img src={f1} alt='' />
          </div>

          <div className='col-md-4'>
            <img src={f2} alt='' />
          </div>
          <div className='col-md-4'>
            <img src={f3} alt='' />
          </div>
        </div>
        <br />
        <div className='row'>
          <div className='col-md-4'>
            <img src={f4} alt='' />
          </div>
          <div className='col-md-4'>
            <img src={f5} alt='' />
          </div>
          <div className='col-md-4'>
            <img src={f6} alt='' />
          </div>
        </div>
        <br />
        {/* <br /> */}
        <div className='row'>
          <div className='col-md-4'>
            <img src={f7} alt='' />
          </div>
          <div className='col-md-4'>
            <img src={f8} alt='' />
          </div>
          <div className='col-md-4'>
            <img src={f9} alt='' />
          </div>
        </div>
        <br />
        <div className='row'>
          <div className='col-md-4'>
            <img src={f10} alt='' />
          </div>
          <div className='col-md-4'>
            <img src={f11} alt='' />
          </div>
          <div className='col-md-4'>
            <img src={f12} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Legal
