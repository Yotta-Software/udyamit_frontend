import React from "react";
import axios from "axios";
import { config } from "../../../config";
import { toast } from "react-toastify";

function Qulification({ prevStep, nextStep, jobId, jobApplyId }) {
  const  qulification=localStorage.getItem("qulification")?JSON.parse(localStorage.getItem("qulification")):null;
  const [sec, setSec] = React.useState(false);
  const [srSec, setSrSec] = React.useState(false);
  const [ug, setUg] = React.useState(false);
  const [pg, setPg] = React.useState(false);
  const [higestQualification, setHighestQualification] = React.useState(qulification?qulification.higestQualification:"");
  const [data, setData] = React.useState({
    degree:qulification?qulification.degree:"",
    discipline:qulification?qulification.discipline:"",
    pdegree: qulification?qulification.pdegree:"",
    pdiscipline: qulification?qulification.pdiscipline:"",
  });

  const [error, setError] = React.useState({
    min: "",
    degree: "",
    discipline: "",
    pdegree: "",
    pdiscipline: "",
  });

  const handleChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };
  const saveAndContinue = (e) => {
    e.preventDefault();
    console.log(sec);
    if(!higestQualification){
      if (!sec) {
        setError({
          min: "Please select your higest qulification",
          degree: "",
          discipline: "",
          pdegree: "",
          pdiscipline: "",
        });
        return;
      }
      if (sec) {
        data.qulification = 1;
      }
      if (srSec) {
        data.qulification = 2;
      }
      if (ug) {
        data.qulification = 3;
        if (data.degree.length < 2) {
          setError({
            min: "",
            degree: "Please enter your degree",
            discipline: "",
            pdegree: "",
            pdiscipline: "",
          });
          return;
        }
      }
      if (pg) {
        data.qulification = 4;
        if (data.pdegree.length < 2) {
          setError({
            min: "",
            degree: "",
            discipline: "",
            pdegree: "Please enter your degree",
            pdiscipline: "",
          });
          return;
        }
      }
    }
    console.log("qualification", data);
    data.jobApplyId = jobApplyId;
    localStorage.setItem("qulification",JSON.stringify({...data,higestQualification}));
    nextStep();
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Qulification Details</h5>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div class="form-check">
                <p style={{ color: "red" }}>{error?.min}</p>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  onClick={() => {
                    setHighestQualification('Secondary');
                    setSec(!sec);
                    setSrSec(false);
                    setUg(false);
                    setPg(false);
                  }}
                  checked={sec || (higestQualification==='Secondary')}
                />
                <label class="form-check-label" for="defaultCheck1">
                  Secondary
                </label>
              </div>
            </div>

            <div className="col-md-12 col-sm-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  onClick={() => {
                    setSec(!srSec);
                    setSrSec(!srSec);
                    setUg(false);
                    setPg(false);
                    setHighestQualification('Senior Secondary');
                  }}
                  
                  checked={srSec || (higestQualification==='Senior Secondary')}
                />
                <label class="form-check-label" for="defaultCheck1">
                  Senior Secondary
                </label>
              </div>
            </div>

            <div className="col-md-12 col-sm-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  onClick={() => {
                    setSec(!ug);
                    setSrSec(!ug);
                    setUg(!ug);
                    setPg(false);
                    setHighestQualification('Graduate');
                  }}
                  checked={ug || (higestQualification==='Graduate')}
                />
                <label class="form-check-label" for="defaultCheck1">
                  Graduate
                </label>
              </div>
              <div style={{ display: ug ? "block" : "none" }}>
                <div className="col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Degree
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="degree"
                      name="degree"
                      value={data.degree}
                      onChange={handleChange}
                    />
                    <p style={{ color: "red" }}>{error?.degree}</p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Discipline
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="discipline"
                      value={data.discipline}
                      name="discipline"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-sm-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                  onClick={() => {
                    setSec(!pg);
                    setSrSec(!pg);
                    setUg(!pg);
                    setPg(!pg);
                    setHighestQualification('Post Graduate');
                  }}
                  checked={pg || (higestQualification==='Post Graduate')}
                />
                <label class="form-check-label" for="defaultCheck1">
                  Post Graduate
                </label>
              </div>
              <div style={{ display: pg ? "block" : "none" }}>
                <div className="col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Degree
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="degree"
                      name="pdegree"
                      value={data.pdegree}
                      onChange={handleChange}
                    />
                    <p style={{ color: "red" }}>{error?.pdegree}</p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Discipline
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="discipline"
                      name="pdiscipline"
                      value={data.pdiscipline}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="btn btn-dark"
                style={{ marginRight: 10 }}
                onClick={back}
              >
                Back 
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={saveAndContinue}
              >
                Next 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qulification;
