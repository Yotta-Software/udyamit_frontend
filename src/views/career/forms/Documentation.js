import React, { useState } from "react";
import axios from "axios";
import { config } from "../../../config";
import { toast } from "react-toastify";
import pay from "../../../utils/pay";
import { app } from "../../../auth/auth";
import { getAuth } from "firebase/auth";

function Documentation({ prevStep, nextStep, jobId, jobApplyId }) {
  const auth = getAuth(app);
  const [showpayBtn, setShowpayBtn] = useState(false);
  const [data, setData] = React.useState({
    signature: localStorage.getItem("signature")
      ? localStorage.getItem("signature")
      : "",
    photo: localStorage.getItem("photo") ? localStorage.getItem("photo") : "",
    idBack: localStorage.getItem("idBack")
      ? localStorage.getItem("idBack")
      : "",
    idFront: localStorage.getItem("idFront")
      ? localStorage.getItem("idFront")
      : "",
    idName: localStorage.getItem("idName")
      ? localStorage.getItem("idName")
      : "",
  });

  const [error, setError] = React.useState({
    signature: "",
    photo: "",
    idBack: "",
    idFront: "",
    idName: "0",
  });

  const [select, setSelect] = React.useState(0);
  const back = (e) => {
    e.preventDefault();
    prevStep();
  };
  const saveAndContinue = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("signature")) {
      setError({
        signature: "Please upload signature",
        photo: "",
        idBack: "",
        idFront: "",
        idName: "0",
      });
      return;
    }
    if (!localStorage.getItem("photo")) {
      setError({
        signature: "",
        photo: "Please upload your photo",
        idBack: "",
        idFront: "",
        idName: "0",
      });
      return;
    }
    if (!localStorage.getItem("idFront")) {
      setError({
        signature: "",
        photo: "",
        idBack: "",
        idFront: "Please upload front side of  your id",
        idName: "0",
      });
      return;
    }
    const personalData = JSON.parse(localStorage.getItem("personalData"));
    const applicantDetails = JSON.parse(
      localStorage.getItem("applicantDetails")
    );
    const selectedJob = JSON.parse(localStorage.getItem("selectedJob"));
    console.log("selectedJob", selectedJob.application_fee);
    const jobLocation = JSON.parse(localStorage.getItem("jobLocation"));
    const qulification = JSON.parse(localStorage.getItem("qulification"));
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const signature = localStorage.getItem("signature");
    const photo = localStorage.getItem("photo");
    const idFront = localStorage.getItem("idFront");
    const idBack = localStorage.getItem("idBack");
    const category = localStorage.getItem("category");
    const dataToSubmit = {
      ...personalData,
      ...applicantDetails,
      ...jobLocation,
      ...qulification,
      signature,
      photo,
      idFront,
      idBack,
      jobApplyId,
      jobId,
      user: userInfo._id,
      category: category ? category : "GEN",
    };
    dataToSubmit.isJobOutsideIndia =
      dataToSubmit.isJobOutsideIndia === "Yes" ? true : false;
    //`${config.baseUrl}/applyjob`
    fetch(`${config.baseUrl}/applyjob`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSubmit),
    }).then((res) => {
      let promise = res.json();
      if (res.status === 201) {
        promise.then((data) => {
          toast.info("Successfully submitted");
          localStorage.removeItem("");
          if (localStorage.getItem("category") === "SC") {
            localStorage.removeItem("category");
            document.location.href = "https://pmny.in/WIEiVEY4w9PB";
            return;
          }
          if (localStorage.getItem("category") === "PC") {
            document.location.href = "https://pmny.in/WIEiVEY4w9PB";
            return;
          }
          if (selectedJob.application_fee === "380") {
            document.location.href = "https://pmny.in/yILKXujmWl5Y";
          }
          if (selectedJob.application_fee === "300") {
            document.location.href = "https://pmny.in/KrA5lTam0RR3";
          }
        });
      } else {
        promise.then((err) => {
          toast.error(err.message);
        });
      }
    });
    console.log(dataToSubmit);
  };

  const handleSelect = (e) => {
    setSelect(e.target.value);
    data.idName = e.target.value;
  };

  const handleFile = (e) => {
    const formData = new FormData();
    let file = e.target.files[0];
    formData.append("file", file, file.name);
    formData.append("name", e.target.name);
    //config.baseUrl + config.upload
    axios
      .post("http://localhost:8080/uploads", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("file", res.data.data.url);
        if (e.target.name === "signature") {
          localStorage.setItem("signature", res.data.data.url);
        }
        if (e.target.name === "photo") {
          localStorage.setItem("photo", res.data.data.url);
        }
        console.log(e.target.name);
        if (e.target.name === "idFront") {
          localStorage.setItem("idFront", res.data.data.url);
        }
        if (e.target.name === "idBack") {
          localStorage.setItem("idBack", res.data.data.url);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

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
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Documentation Details</h5>

          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div class=" mb-3">
                <label for="formFile" class="form-label">
                  Signature
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="formFile"
                  name="signature"
                  required
                  style={{
                    background: data.signature.length > 4 ? "#9fd89f" : "",
                  }}
                  onChange={handleFile}
                />
                <p style={{ color: "red" }}>{error?.signature}</p>
                {/* <div class="spinner-border text-danger" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div> */}
                {localStorage.getItem("signature") ? (
                  <a
                    href={localStorage.getItem("signature")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Uploaded Signature
                  </a>
                ) : null}
              </div>
            </div>

            <div className="col-md-12 col-sm-12">
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Photograph
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="formFile"
                  name="photo"
                  required
                  style={{
                    background: data.photo.length > 4 ? "#9fd89f" : "",
                  }}
                  onChange={handleFile}
                />
                <p style={{ color: "red" }}>{error?.photo}</p>
                {localStorage.getItem("photo") ? (
                  <a
                    href={localStorage.getItem("photo")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Uploaded photo
                  </a>
                ) : null}
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <label for="exampleDataList" class="form-label">
                Upload Document
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                onChange={handleSelect}
              >
                <option value="0" selected>
                  Aadhar
                </option>
                <option value="1">Voter Id Card</option>
                <option value="2">PAN Card</option>
                <option value="3">Passport</option>
                <option value="4">Driving Licence</option>
              </select>
            </div>

            <div className="col-md-12 col-sm-12">
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Front
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="formFile"
                  required
                  name="idFront"
                  style={{
                    background: data.idFront.length > 4 ? "#9fd89f" : "",
                  }}
                  onChange={handleFile}
                />{" "}
                <p style={{ color: "red" }}>{error?.idFront}</p>
                {localStorage.getItem("idFront") ? (
                  <a
                    href={localStorage.getItem("idFront")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Uploaded Document Front
                  </a>
                ) : null}
              </div>
            </div>
            <div
              className="col-md-12 col-sm-12"
              style={{ display: select == 0 ? "block" : "none" }}
            >
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Back
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="formFile"
                  required
                  name="idBack"
                  style={{
                    background: data.idBack.length > 4 ? "#9fd89f" : "",
                  }}
                  onChange={handleFile}
                />{" "}
                <p style={{ color: "red" }}>{error?.idBack}</p>
                <p style={{ color: "red" }}>{error?.idFront}</p>
                {localStorage.getItem("idBack") ? (
                  <a
                    href={localStorage.getItem("idBack")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Uploaded Document Back
                  </a>
                ) : null}
              </div>
            </div>

            <div className="col-md-12 col-sm-12">
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
                Submit
              </button>
              <button
                type="button"
                className="btn btn-dark"
                style={{ marginLeft: "10px" }}
                onClick={() => document.location.reload()}
              >
                Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
