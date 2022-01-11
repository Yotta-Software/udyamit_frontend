import React from 'react'
import ac1 from '../../asstes/center2/New folder (2)resize/1.jpg'
import ac2 from '../../asstes/center2/New folder (2)resize/2.jpg'
import ac3 from '../../asstes/center2/New folder (2)resize/3.jpg'
import ac4 from '../../asstes/center2/New folder (2)resize/4.jpg'
import ac5 from '../../asstes/center2/New folder (2)resize/5.jpg'
import ac6 from '../../asstes/center2/New folder (2)resize/6.jpg'
import ac7 from '../../asstes/center2/New folder (2)resize/7.jpg'
import ac8 from '../../asstes/center2/New folder (2)resize/8.jpg'
import ac9 from '../../asstes/center2/New folder (2)resize/9.jpg'
import ac10 from '../../asstes/center2/New folder (2)resize/10.jpg'
function Workact() {
  return (
    <div>
      <div className='container ourcent'>
        <div className='row'>
          <center>
            <h1>Work Activity</h1>
          </center>
        </div>
        <div className='row'>
          <div className='col-md-3'>
            <img src={ac1} alt='center' />
          </div>
          <div className='col-md-3'>
            <img src={ac2} alt='center' />
          </div>
          <div className='col-md-3'>
            <img src={ac3} alt='center' />
          </div>
          <div className='col-md-3'>
            <img src={ac4} alt='center' />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-3'>
            <img src={ac5} alt='center' />
          </div>
          <div className='col-md-3'>
            <img src={ac6} alt='center' />
          </div>
          <div className='col-md-3'>
            <img src={ac7} alt='center' />
          </div>
          <div className='col-md-3'>
            <img src={ac8} alt='center' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <img src={ac9} alt='' />
          </div>
          <div className='col-md-6'>
            <img src={ac10} alt='' />
          </div>
        </div>
      </div>

      {/* </div> */}
    </div>
  )
}

export default Workact
