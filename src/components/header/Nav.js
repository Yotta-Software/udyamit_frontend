import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { app } from '../../auth/auth'
import logo from '../../asstes/logo/favicon.png'

function Nav() {
  const auth = getAuth(app);
  const [userInfo,setUserInfo] = useState(localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):null);
  const logOut=()=>{
    setUserInfo(null);
    localStorage.clear();
  };

  return (
    <nav
      className='navbar navbar-expand-lg navbar-light'
      style={{ paddingLeft: 30, paddingRight: 30, backgroundColor: '#5c007a' }}
    >
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/' style={{ color: 'white' }}>
          <img src={logo} alt='logo' style={{ width: 30 }} />
        </Link>
        <Link
          to='/creers'
          className='nav-link buttonGlow apply'
          // style={{
          //   background: "red",
          //   borderRadius: 5,
          //   fontWeight: "600",
          // }}
          href='#'
        >
          Apply Now
        </Link>
        <button
          className='navbar-toggler bg-danger'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/' className='nav-link active' aria-current='page'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <div class='btn-group'>
                <a
                  type='button'
                  class='btn text-white dropdown-toggle'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Vacancy
                </a>
                <ul class='dropdown-menu'>
                  <li>
                    <Link to='/creers' className='dropdown-item' href='#'>
                      Vacancy
                    </Link>
                  </li>

                  <li>
                    <Link to='/process' className='dropdown-item' href='#'>
                      Apply Process
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            {/* &nspb; */}
            <li className='nav-item'>
              <div class='btn-group'>
                <a
                  type='button'
                  class='btn text-white dropdown-toggle ml-4'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  About 
                </a>
                <ul class='dropdown-menu'>
                  <li>
                    <Link to='/about' className='dropdown-item' href='#'>
                      About us
                    </Link>
                  </li>

                  <li>
                    <Link to='/mission' className='dropdown-item' href='#'>
                      Mission
                    </Link>
                  </li>
                  <li>
                    <Link to='/Legal' className='dropdown-item' href='#'>
                      Documents & Certifications
                    </Link>
                  </li>

                  <li>
                    <Link to='/privacy' className='dropdown-item' href='#'>
                      Pravacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to='/terms' className='dropdown-item' href='#'>
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to='/vision' className='dropdown-item' href='#'>
                      Vission
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className='nav-item'>
              <Link to='/program' className='nav-link' href='#'>
                Program
              </Link>
            </li>
            <li className='nav-item'>
              <li class='btn-group'>
                <a
                  type='button'
                  class='btn text-white dropdown-toggle'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  {/* {' '} */}
                  Gallery
                </a>
                <ul class='dropdown-menu'>
                  <li>
                    <Link to='/work' className='dropdown-item' href='#'>
                      Work Activity
                    </Link>
                  </li>

                  <li>
                    <Link to='/press' className='dropdown-item' href='#'>
                      Press Release
                    </Link>
                  </li>
                  <li>
                    <Link to='/oprogram' className='dropdown-item' href='#'>
                      Our Program
                    </Link>
                  </li>
                  <li>
                    <Link to='/center' className='dropdown-item' href='#'>
                      Our Center
                    </Link>
                  </li>
                </ul>
              </li>
            </li>
            {/* <li className='nav-item'>
              <Link to='/process' className='nav-link' href='#'>
                Process
              </Link>
            </li> */}

            <li className='nav-item'>
              <Link to='/digitalLearning' className='nav-link' href='#'>
                Digital Learning
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link' href='#'>
                Contact Us
              </Link>
            </li>
            {auth && auth.currentUser ? (
              <li className='nav-item'>
                <Link to='/dashboard' className='nav-link' href='#'>
                  Dashboard
                </Link>
              </li>
            ) : (
              <></>
            )}
          </ul>
          <Link
            to='/creers'
            className='nav-link a-glow'
            // style={{
            //   background: "#0d8dc8",
            //   borderRadius: 5,
            //   fontWeight: "600",
            //   marginRight: 5,
            // }}
            href='#'
          >
            Jobs
          </Link>
          <Link
            to='/creers'
            className='nav-link buttonGlow'
            // style={{
            //   background: "red",
            //   borderRadius: 5,
            //   fontWeight: "600",
            // }}
            href='#'
          >
            Apply Now
          </Link>
           {userInfo? (
            <div style={{listStyle: 'none'}}>
               <li className='nav-item' >
              <li class='btn-group'>
                <Link
                  type='button'
                  class='btn text-white dropdown-toggle'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  { userInfo.name}
                </Link>
                <ul class='dropdown-menu'>
                  <li>
                    <Link to='/profile' className='dropdown-item' href='#'>
                     Profile
                    </Link>
                  </li>
                  <li>
                    <Link to='/login' className='dropdown-item' onClick={logOut}>
                    Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </li>
            </div>
          ) : (
            <Link to='/login' className='nav-link' href='#'>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav
