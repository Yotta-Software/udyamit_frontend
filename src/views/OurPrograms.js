import React from 'react'
// import entrepreneur from "../asstes/program/entrepreneur.jpg";
// import employment from "../asstes/program/employment.jpg";
// import skill from "../asstes/program/skill_development.jpg";
// import education from "../asstes/program/education.jpg";
import g1 from '../../src/asstes/Certificate/pg1 (1).jpg'
import g2 from '../../src/asstes/Certificate/pg1 (2).jpg'
import g3 from '../../src/asstes/Certificate/pg1 (3).jpg'
import g4 from '../../src/asstes/Certificate/pg1 (4).jpg'
function OurPrograms() {
  return (
    <div class='container'>
      <center>
        <br />
        <h4>Our Programs</h4>
        <br />
      </center>
      {/* <div class='row'>
        <div className='card col-sm'>
          <div className='card-body'>
            <center>
              <img
                src='https://images.tv9hindi.com/wp-content/uploads/2021/06/pm-modi-1-1.jpg'
                style={{ width: 200, height: 200 }}
              />
            </center>
            <br />
            <h4>Employment and Councelling Center</h4>
            <p>
              Provice database of available employment opportunities in
              goverment or Non-government sector.Promoting awareness on National
              apprentice program, National Career service, NSDC ASEEM PORTAL,
              SKILL INDIA, GOVERNMENT Employment exchange, Atmanirvar Bharat
              Rojgar Abhiyan, Gareeb Kalyan Rojgar Abhiyan etc
            </p>
          </div>
        </div>
    

        <div className='card col-sm'>
          <div className='card-body'>
            <center>
              <img
                src='http://www.practiceguru.pro/images/startup-india.jpg'
                style={{ width: 200, height: 200 }}
              />
            </center>
            <br />
            <h4>Entrepreneur Development Center</h4>
            <p>
              To match local entrepreneurs with local investors.
              <br />
              Promoting awareness on various scheme of Ministry of Micro, Small
              and Medium Enterprises, Startup India, Standup India,
              Entrepreneurship Development Program of different Ministries.
              Promoting awareness on fundraising through loan or equity
              investor.
            </p>
          </div>
        </div>

        <div className='card col-sm'>
          <div className='card-body'>
            <center>
              <img
                src='https://upload.wikimedia.org/wikipedia/en/3/3e/Skill_India.png'
                style={{ width: 200, height: 200 }}
              />
            </center>
            <br />
            <h4>Skill Development Program</h4>
            <p>
              To train unemployed youth respective of available opportunities.
              various entrepreneurship skill development program as PMKVY, Sikho
              Kamao, DAY-NULM, DDUGKY, Hunar se Rojgar Tak, Sankalp scheme, Nayi
              Roshni, Recruit-Train-Deploy Skill Development Program,
            </p>
          </div>
        </div>

        <div className='card col-sm'>
          <div className='card-body'>
            <center>
              <img
                src='https://p9m8z8i9.rocketcdn.me/wp-content/uploads/2020/08/New-national-education-policy-2020-1000x563.png'
                style={{ width: 200, height: 200 }}
              />
            </center>
            <br />
            <h4>Empowerment Education System</h4>
            <p>
              Transform education system on NEW EDUCATION POLICY focus on
              Digital Learning based Pre School in every Panchayat, Online
              Education System, One Compulsory Skill Development Subject in
              every course, Coding Class from class 6, KAUSHAL YUVA - KUSHAL
              BHARAT, AATMANIRBHAR YUVA- AATMANIRBHAR BHARAT.
            </p>
          </div>
        </div>
      </div>
      <div className='card'></div> */}

      <div className='row'>
        <div className='col-md-3'>
          <div class='card mypro'>
            <img src={g3} class='card-img-top' alt='...' />
            <div class='card-body'>
              <h5 class='card-title'>Employment and Councelling Center</h5>
              <p class='card-text mytextj'>
                Provice database of available employment opportunities in
                goverment or Non-government sector.Promoting awareness on
                National apprentice program, National Career service, NSDC ASEEM
                PORTAL, SKILL INDIA, GOVERNMENT Employment exchange, Atmanirvar
                Bharat Rojgar Abhiyan, Gareeb Kalyan Rojgar Abhiyan etc.
              </p>
              <a href='#' class='btn btn-primary'>
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className='col-md-3'>
          <div class='card  mypro'>
            <img src={g2} class='card-img-top' alt='...' />
            <div class='card-body'>
              <h5 class='card-title '>Entrepreneur Development Center</h5>
              <p class='card-text  mytextj'>
                Promoting awareness on various scheme of Ministry of Micro,
                Small and Medium Enterprises, Startup India, Standup India,
                Entrepreneurship Development Program of different Ministries.
                Promoting awareness on fundraising through loan or equity
                investor.
              </p>
              <br />
              <a href='#' class='btn btn-primary'>
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className='col-md-3'>
          <div class='card mypro'>
            <img src={g4} class='card-img-top' alt='...' />
            <div class='card-body'>
              <h5 class='card-title'>Skill Development Program</h5>
              <p class='card-text mytextj'>
                To train unemployed youth respective of available opportunities.
                various entrepreneurship skill development program as PMKVY,
                Sikho Kamao, DAY-NULM, DDUGKY, Hunar se Rojgar Tak, Sankalp
                scheme, Nayi Roshni, Recruit-Train-Deploy Skill Development
                Program,
              </p>
              <a href='#' class='btn btn-primary'>
                Read More
              </a>
            </div>
          </div>
        </div>

        <div className='col-md-3'>
          <div class='card mypro'>
            <img src={g1} class='card-img-top' alt='...' />
            <div class='card-body'>
              <h5 class='card-title'>Empowerment Education System</h5>
              <p class='card-text mytextj'>
                Transform education system on NEW EDUCATION POLICY focus on
                Digital Learning based Pre School in every Panchayat, Online
                Education System, One Compulsory Skill Development Subject in
                every course, Coding Class from class 6, KAUSHAL YUVA - KUSHAL
                BHARAT, AATMANIRBHAR YUVA- AATMANIRBHAR BHARAT.
              </p>
              <a href='#' class='btn btn-primary'>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurPrograms
