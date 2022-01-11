import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { getDigitalCourse } from "../../utils/dataApi";
import { app } from "../../auth/auth";
import { getAuth } from "firebase/auth";
import coursePay from "../../utils/coursePay";
import { toast } from 'react-toastify';
function CourseDetails() {
  const auth = getAuth(app);
  // pay(jobId, auth?.currentUser?.uid, res.data.body);
  const history = useHistory();
  let { cid } = useParams();

  const pay = () => {
    if (!localStorage.getItem('userInfo')) {
      history.push("/login");
      return;
    }
    if (cid?.length < 6) {
      return;
    }
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    fetch('https://udyamit.in/subscription',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        courseId:cid,
        coursePrice:course.price,
        email:userInfo.email,
        user:userInfo._id
      }) 
    }).then(res=>{
      let promise=res.json();
      if(res.status===200){
        promise.then(data=>{
          if(course.price==499){
            document.location.href='https://pmny.in/sIyjc4HlHAlm'
          }
          if(course.price==999){
            document.location.href='https://pmny.in/HrS6orerrmku'
          }
        })
      }else{
        promise.then(err=>{
        toast.error(err.message);
        })
      }
    })
  };

  const [course, setCourse] = React.useState(null);
  React.useEffect(() => {
    async function fetchData() {
      const courseData = await getDigitalCourse("?id=" + cid);

      setCourse(courseData && courseData.digital);
    }
    fetchData();
    return () => {
      setCourse(null);
    };
  }, []);
  // alert(id);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  React.useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });
  return (
    <div className="container">
      <div
        class="card mb-3"
        style={{ border: "none", borderRadius: 0, marginTop: 10 }}
      >
        <div class="row g-0">
          <div class="col-md-8">
            {course ? (
              <div class="card-body">
                <h5 class="card-title">{course.name}</h5>
                <br />
                <h5 class="card-subtitle mb-2 text-muted">
                  Course Description
                </h5>
                <p class="card-text">{course.description}</p>
                <h5 class="card-subtitle mb-2 text-muted">
                  Language : {course.language}
                </h5>
                <h5 class="card-subtitle mb-2 text-muted">
                  Pre Educational Qualification : {course.qualification}
                  {/* <a href={course.syllabus_url}>
                    <i class="fas fa-link"></i>
                  </a> */}
                </h5>
                <h5 class="card-subtitle mb-2 text-muted">
                  Price : {course.price}
                </h5>
                <h5 class="card-subtitle mb-2 text-muted">
                  Sector : {course.sector}
                </h5>
                <h5 class="card-subtitle mb-2 text-muted">
                  Duration : {course.duration}
                </h5>
                <h5 class="card-subtitle mb-2 text-muted">
                  Availability : {course.availability}
                </h5>
                <h5 class="card-subtitle mb-2 text-muted">
                  Certification Availability from Knowledge Partner :
                  {course.certificationPartner}
                </h5>
                <h5 class="card-subtitle mb-2 text-muted">
                  IT Certification Availability from SEED Program :
                  {course.certificationProgram}
                </h5>

                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
                <button
                  type="button"
                  class="btn btn-outline-success"
                  onClick={() => pay()}
                >
                  Get Now <i class="fas fa-long-arrow-alt-right"></i>
                </button>
              </div>
            ) : (
              <div class="card-body">Loading...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
