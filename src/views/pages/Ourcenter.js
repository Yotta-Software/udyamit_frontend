import React from 'react'
import c1 from '../../asstes/center2/center resize/1.jpg'
import c2 from '../../asstes/center2/center resize/2.jpg'
import c3 from '../../asstes/center2/center resize/3.jpg'
import c4 from '../../asstes/center2/center resize/4.jpg'
import c5 from '../../asstes/center2/center resize/5.jpg'
import c6 from '../../asstes/center2/center resize/6.jpg'
import c7 from '../../asstes/center2/center resize/7.jpg'
import c8 from '../../asstes/center2/center resize/8.jpg'

function Ourcenter() {
  return (
    <div>
      <div className='container-fluid bg-danger text-white'>
        <marquee behavior='scroll' direction=''>
          <h1>
            <b className='text-warning'>'34th District'</b> Our Center In India
          </h1>
        </marquee>
      </div>
      <div className='container ourcent'>
        <div className='row'>
          <div className='col-md-3'>
            <img src={c1} alt='center' />
          </div>
          <div className='col-md-3'>
            <img src={c2} alt='center' />
          </div>
          <div className='col-md-3'>
            <img src={c3} alt='center' />
          </div>
          <div className='col-md-3'>
            <img src={c4} alt='center' />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-3'>
            <img src={c5} alt='center' />
          </div>
          <div className='col-md-3'>
            <img src={c6} alt='center' />
          </div>
          <div className='col-md-3'>
            <img src={c7} alt='center' />
          </div>
          <div className='col-md-3'>
            <img src={c8} alt='center' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourcenter
