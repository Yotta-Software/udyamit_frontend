import React from "react";
import axios from "axios";
import { config } from "../../../config";
import { toast } from "react-toastify";

function Personal({ nextStep, jobId, user, jobApplyId }) {
  const personalData=localStorage.getItem("personalData")?JSON.parse(localStorage.getItem("personalData")):null;
  const [data, setData] = React.useState({
    email: user?.email,
    fatherName: personalData?personalData.fatherName:"",
    fname: personalData?personalData.fname:"",
    gender:personalData?personalData.gender:"",
    lname: personalData?personalData.lname:"",
    motherName:personalData?personalData.motherName:"",
    phone: personalData?personalData.phone:"",
    religion: personalData?personalData.religion:"",
    dob:personalData?personalData.dob: new Date().toLocaleDateString("en-CA"),
  });
  const [error, setError] = React.useState({
    email: "",
    fatherName: "",
    fname: "",
    gender: "",
    lname: "",
    motherName: "",
    phone: "",
    religion: "",
  });
  const handleChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const saveAndContinue = (e) => {
    e.preventDefault();
    if (data.fname.length < 3) {
      setError({
        email: "",
        fatherName: "",
        fname: "Please enter your name",
        gender: "",
        lname: "",
        motherName: "",
        phone: "",
      });
      return;
    }
    if (data.fatherName.length < 3) {
      setError({
        email: "",
        fatherName: "Please enter your father name",
        fname: "",
        gender: "",
        lname: "",
        motherName: "",
        phone: "",
        dob: "", //
        religion: "",
      });
      return;
    }
    if (data.gender.length < 1) {
      setError({
        email: "",
        fatherName: "",
        fname: "",
        gender: "Please select your gender",
        lname: "",
        motherName: "",
        phone: "",
      });
      return;
    }
    if (data.email.length < 5) {
      setError({
        email: "Please enter valid email",
        fatherName: "",
        fname: "",
        gender: "",
        lname: "",
        motherName: "",
        phone: "",
      });
      return;
    }
    if (data.phone.length < 10) {
      setError({
        email: "",
        fatherName: "",
        fname: "",
        gender: "",
        lname: "",
        motherName: "",
        phone: "Please enter valid phone number",
      });
      return;
    }
//config.baseUrl + config.personal
    // data.jobApplyId = jobApplyId;
    // data.jobId = jobId;
    // axios
    //   .post('http://localhost:4000/api/personal', data)
    //   .then((res) => {
    //     if (res.status === 201) {
    //       toast.info("you are already apply this job.");
    //       return;
    //     }
    //     console.log("step 1 comp");
    //     toast.success("1st step completed");
    //     nextStep();
    //   })
    //   .catch((err) => {
    //     toast.error("Internal server error");
    //   });
    localStorage.setItem("personalData",JSON.stringify(data));
    nextStep();
  };
 
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Personal Details</h5>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  First Name / पहला नाम
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={data.fname}
                  placeholder="First Name"
                  name="fname"
                  onChange={handleChange}
                />
                <p style={{ color: "red" }}>{error?.fname}</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Last Name / आखरी नाम
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={data.lname}
                  placeholder="Last Name"
                  name="lname"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Father's Name / पिता का नाम
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Father's Name"
                  value={data.fatherName}
                  name="fatherName"
                  onChange={handleChange}
                />
                <p style={{ color: "red" }}>{error?.fatherName}</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Mother's Name / माता का नाम
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mother's Name"
                  value={data.motherName}
                  name="motherName"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="exampleRadios1"
                  value="male"
                  onChange={handleChange}
                  checked={data.gender==="male"?true:false}
                />
                <label class="form-check-label" for="exampleRadios1">
                  Male
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="exampleRadios2"
                  value="female"
                  onChange={handleChange}
                  checked={data.gender==="female"?true:false}
                />
                <label class="form-check-label" for="exampleRadios2">
                  Female
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="gender"
                  id="exampleRadios3"
                  value="other"
                  onChange={handleChange}
                  checked={data.gender==="other"?true:false}
                />
                <label class="form-check-label" for="exampleRadios3">
                  Other
                </label>
                <p style={{ color: "red" }}>{error?.gender}</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email / ई - मेल
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  disabled
                  onChange={handleChange}
                  value={user?.email}
                />
                <p style={{ color: "red" }}>{error?.email}</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone Number / फोन नंबर
                </label>
                <input
                  type="number"
                  maxlength="10"
                  className="form-control"
                  placeholder={"Phone Number"}
                  value={data.phone}
                  name="phone"
                  onChange={handleChange}
                />
                <p style={{ color: "red" }}>{error?.phone}</p>
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="religion"
                  id="exampleRadios11"
                  value="hindu"
                  onChange={handleChange}
                  checked={data.religion==="hindu"?true:false}
                />
                <label class="form-check-label" for="exampleRadios11">
                  Hindu / हिंदू
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="religion"
                  id="exampleRadios21"
                  value="muslim"
                  onChange={handleChange}
                  checked={data.religion==="muslim"?true:false}
                />
                <label class="form-check-label" for="exampleRadios21">
                  Muslim / मुस्लिम
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="religion"
                  id="exampleRadios31"
                  value="sikh"
                  onChange={handleChange}
                  checked={data.religion==="sikh"?true:false}
                />
                <label class="form-check-label" for="exampleRadios31">
                  Sikh / सीख
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="religion"
                  id="exampleRadios32"
                  value="christian"
                  onChange={handleChange}
                  checked={data.religion==="christian"?true:false}
                />
                <label class="form-check-label" for="exampleRadios32">
                  Christian / इसाई
                </label>
                <p style={{ color: "red" }}>{error?.religion}</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Date of Birth / जन्म तिथि
                </label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Date of birth"
                  value={data.dob}
                  name="dob"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-dark"
            onClick={saveAndContinue}
           >
            Next <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Personal;
