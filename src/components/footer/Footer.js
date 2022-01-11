import React from 'react'
import '../../style.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    // <div
    //   style={{
    //     width: "100%",
    //     height: 250,
    //     marginTop: 15,
    //     backgroundColor: "#504c5c",
    //     paddingTop: 10,
    //   }}
    // >
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-3 col-sm-12">
    //         <div
    //           class="card"
    //           style={{
    //             backgroundColor: "transparent",
    //             color: "white",
    //             border: "none",
    //           }}
    //         >
    //           <div class="card-body">
    //             <h5 class="card-title">Contact us</h5>
    //             This is some text within a card body.
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-md-3 col-sm-12"></div>
    //       <div className="col-md-3 col-sm-12"></div>
    //       <div className="col-md-3 col-sm-12"></div>
    //     </div>
    //   </div>
    // </div>
    // <footer class="footer-04">
    //   <div class="container">
    //     <div class="row">
    //       <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
    //         <h2 class="footer-heading">
    //           <a href="#" class="logo">
    //             Colorlib
    //           </a>
    //         </h2>
    //         <p>
    //           A small river named Duden flows by their place and supplies it
    //           with the necessary regelialia.
    //         </p>
    //         <a href="#">
    //           read more <span class="ion-ios-arrow-round-forward"></span>
    //         </a>
    //       </div>
    //       <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
    //         <h2 class="footer-heading">Categories</h2>
    //         <ul class="list-unstyled">
    //           <li>
    //             <a href="#" class="py-1 d-block">
    //               Buy &amp; Sell
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" class="py-1 d-block">
    //               Merchant
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" class="py-1 d-block">
    //               Giving back
    //             </a>
    //           </li>
    //           <li>
    //             <a href="#" class="py-1 d-block">
    //               Help &amp; Support
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
    //         <h2 class="footer-heading">Tag cloud</h2>
    //         <div class="tagcloud">
    //           <a href="#" class="tag-cloud-link">
    //             dish
    //           </a>
    //           <a href="#" class="tag-cloud-link">
    //             menu
    //           </a>
    //           <a href="#" class="tag-cloud-link">
    //             food
    //           </a>
    //           <a href="#" class="tag-cloud-link">
    //             sweet
    //           </a>
    //           <a href="#" class="tag-cloud-link">
    //             tasty
    //           </a>
    //           <a href="#" class="tag-cloud-link">
    //             delicious
    //           </a>
    //           <a href="#" class="tag-cloud-link">
    //             desserts
    //           </a>
    //           <a href="#" class="tag-cloud-link">
    //             drinks
    //           </a>
    //         </div>
    //       </div>
    //       <div class="col-md-6 col-lg-3 mb-md-0 mb-4">
    //         <h2 class="footer-heading">Subcribe</h2>
    //         <form action="#" class="subscribe-form">
    //           <div class="form-group d-flex">
    //             <input
    //               type="text"
    //               class="form-control rounded-left"
    //               placeholder="Enter email address"
    //             />
    //             <button type="submit" class="form-control submit rounded-right">
    //               <span class="sr-only">Submit</span>
    //               <i class="ion-ios-send"></i>
    //             </button>
    //           </div>
    //         </form>
    //         <h2 class="footer-heading mt-5">Follow us</h2>
    //         <ul class="ftco-footer-social p-0">
    //           <li class="ftco-animate">
    //             <a
    //               href="#"
    //               data-toggle="tooltip"
    //               data-placement="top"
    //               title="Twitter"
    //             >
    //               <span class="ion-logo-twitter"></span>
    //             </a>
    //           </li>
    //           <li class="ftco-animate">
    //             <a
    //               href="#"
    //               data-toggle="tooltip"
    //               data-placement="top"
    //               title="Facebook"
    //             >
    //               <span class="ion-logo-facebook"></span>
    //             </a>
    //           </li>
    //           <li class="ftco-animate">
    //             <a
    //               href="#"
    //               data-toggle="tooltip"
    //               data-placement="top"
    //               title="Instagram"
    //             >
    //               <span class="ion-logo-instagram"></span>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="w-100 mt-5 border-top py-5">
    //     <div class="container">
    //       <div class="row">
    //         <div class="col-md-6 col-lg-8">
    //           <p class="copyright"></p>
    //         </div>
    //         <div class="col-md-6 col-lg-4 text-md-right">
    //           <p class="mb-0 list-unstyled">
    //             <a class="mr-md-3" href="#">
    //               Terms
    //             </a>
    //             <a class="mr-md-3" href="#">
    //               Privacy
    //             </a>
    //             <a class="mr-md-3" href="#">
    //               Compliances
    //             </a>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer id='footer' class='footer-1'>
      <div class='main-footer widgets-dark typo-light'>
        <div class='container'>
          <div class='row'>
            <div class='col-xs-12 col-sm-6 col-md-3'>
              <div class='widget subscribe no-box'>
                <h5 class='widget-title'>
                  उद्यमित और रोजगार विकास कार्यक्रम<span></span>
                </h5>
                <p className='ftp'>
                  उद्यमित विकास परिषद एवं उद्यमित कार्नर कार्यक्रम, उद्यमशीलता
                  को बढ़ावा देने के लिए सरकार द्वारा चलायी जा रही विभिन्न योजनाओ
                  को समन्वित करके <b> Entrepreneur Development Programme</b>{' '}
                  आयोजित कर रही है |
                </p>
              </div>
            </div>

            <div class='col-xs-12 col-sm-6 col-md-3'>
              <div class='widget no-box'>
                <h5 class='widget-title'>
                  Quick Links<span></span>
                </h5>
                <ul class='thumbnail-widget'>
                  <li>
                    <div class='thumb-content'>
                      <Link to='/privacy'>&nbsp;Privacy Policy</Link>
                    </div>
                  </li>
                  <li>
                    <div class='thumb-content'>
                      <Link to='/terms' href='#'>
                        &nbsp;Terms and Conditions
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class='thumb-content'>
                      <Link to='/refund' href='#'>
                        &nbsp;Refund Policy
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class='thumb-content'>
                      <Link to='/disclaimers' href='#'>
                        &nbsp;Disclaimers
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class='thumb-content'>
                      <Link to='/about' href='#'>
                        &nbsp;About
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div class='thumb-content'>
                      <Link to='/faq' href='#'>
                        &nbsp;FAQ
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class='col-xs-12 col-sm-6 col-md-3'>
              <div class='widget no-box'>
                <h5 class='widget-title'>
                  Follow up<span></span>
                </h5>
                <a
                  href='https://www.facebook.com/Udyamit-104831512059324/'
                  target='_blank'
                  style={{ marginRight: 5 }}
                >
                  <i
                    class='fab fa-facebook'
                    style={{ color: 'white', fontSize: '25px' }}
                  ></i>
                </a>
                <a
                  href='https://www.linkedin.com/company/seed-online-official/'
                  target='_blank'
                  style={{ marginRight: 5 }}
                >
                  <i
                    class='fab fa-linkedin'
                    style={{
                      color: 'white',
                      fontSize: '25px',
                      marginLeft: '10px',
                    }}
                  ></i>
                </a>
                <a
                  href='https://www.instagram.com/udyamitseva/'
                  target='_blank'
                >
                  <i
                    class='fab fa-instagram'
                    style={{
                      color: 'white',
                      fontSize: '25px',
                      marginLeft: '10px',
                    }}
                  ></i>
                </a>

                <a
                  href='https://www.instagram.com/seedonline._/'
                  target='_blank'
                >
                  <i
                    class='fab fa-twitter'
                    style={{
                      color: 'white',
                      fontSize: '25px',
                      marginLeft: '10px',
                    }}
                  ></i>
                </a>
              </div>
            </div>
            <br />
            <br />

            <div class='col-xs-12 col-sm-6 col-md-3'>
              <div class='widget no-box'>
                <h5 class='widget-title'>
                  Contact Us<span></span>
                </h5>
                <address>
                  Address: 70/1/2 Marble Market, Vinayak Ceramic Building, NG
                  Marble Building, Gali no. 25, Mangolpur Kalan, Sector 2
                  Rohini, New Delhi - 110085
                </address>
                <div class='emailfield'>
                  <p>
                    <b>Phone:</b>
                    <a href='tel:+919315590050'> +91 9315590050</a>
                    <br />
                    <a href='tel:+919815880885'>+91 9815880885</a>
                  </p>
                  <p>
                    <b>Email:</b>
                    <a href='mailto:admin@udyamit.in'> admin@udyamit.in</a>
                    <br />
                    <a href='mailto:udyamit@gmail.com'> udyamit@gmail.com</a>
                  </p>
                  {/* <input type="text" name="email" value="Email" />
                  <input name="uri" type="hidden" value="arabiantheme" />
                  <input name="loc" type="hidden" value="en_US" />
                  <input
                    class="submitbutton ripplelink"
                    type="submit"
                    value="Subscribe"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='footer-copyright'>
          <div class='container'>
            <div class='row'>
              <p style={{ textAlign: 'center' }}>
                कॉर्पोरेट कार्य मंत्रालय, कंपनी अधिनियम 2013 के अधीन सेक्शन 8
                निकाय, निति आयोग में सूचीबद्ध, कौशल विकास एवं उद्यमशीलता
                मंत्रालय से सम्बद्ध प्रशिक्षण प्रदाता संस्था, सामाजिक न्याय एवं
                अधिकारिता विभाग
              </p>

              <div class='col-md-12 text-center'>
                <p>Copyright Udyamit © 2021. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
