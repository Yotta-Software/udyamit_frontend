import React from "react";
import axios from "axios";
import { config } from "../../../config";
import { toast } from "react-toastify";

function Address({ prevStep, nextStep, jobId, jobApplyId }) {
  const applicantAddress=localStorage.getItem("applicantAddress")?JSON.parse(localStorage.getItem("applicantAddress")):null;
  const [data, setData] = React.useState({
    address:applicantAddress?applicantAddress.address:"",
    district: applicantAddress?applicantAddress.district:"",
    hn: applicantAddress?applicantAddress.hn:"",
    pin: applicantAddress?applicantAddress.pin:"",
    state: applicantAddress?applicantAddress.state:"",
    street: applicantAddress?applicantAddress.street:"",
  });

  const [error, setError] = React.useState({
    address: "",
    district: "",
    hn: "",
    pin: "",
    state: "",
    street: "",
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
    data.jobApplyId = jobApplyId;

    if (data.address.length < 10) {
      setError({
        address: "Please enter valid address",
        district: "",
        hn: "",
        pin: "",
        state: "",
        street: "",
      });
      return;
    }

    if (data.state.length < 3) {
      setError({
        address: "",
        district: "",
        hn: "",
        pin: "",
        state: "Please enter valid state",
        street: "",
      });
      return;
    }

    if (data.pin.length < 6 || data.pin.length >= 7) {
      setError({
        address: "",
        district: "",
        hn: "",
        pin: "Please enter valid pin",
        state: "",
        street: "",
      });
      return;
    }

    // axios
    //   .post(config.baseUrl + config.address, data)
    //   .then((res) => {
    //     if (res.status == 201) {
    //       toast.error("Please complete step 1");
    //       return;
    //     }
    //     console.log("step 2 comp", res);
    //     toast.success("2st step completed");
    //     nextStep();
    //   })
    //   .catch((err) => {
    //     toast.error("Internal server error");
    //   });
    localStorage.setItem("applicantAddress",JSON.stringify(data));
    nextStep();
  };
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Address Details</h5>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  House No. / ?????? ?????? ????????????
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="House number"
                  value={data.hn}
                  name="hn"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Street / ????????? ????????????
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Street"
                  name="street"
                  value={data.street}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Address / ?????????
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="address"
                  value={data.address}
                  onChange={handleChange}
                ></textarea>
                <p style={{ color: "red" }}>{error?.address}</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  State / ???????????????
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="State"
                  name="state"
                  value={data.state}
                  onChange={handleChange}
                />
                <p style={{ color: "red" }}>{error?.state}</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  District / ????????????
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="District"
                  value={data.district}
                  name="district"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Pin Code / ????????? ?????????
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Pin code"
                  value={data.pin}
                  name="pin"
                  onChange={handleChange}
                />
                <p style={{ color: "red" }}>{error?.pin}</p>
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
  );
}

export default Address;
