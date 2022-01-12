import React from "react";
import login from "../../asstes/logo/seed.png";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../../auth/auth";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { config } from "../../config";

function ResetPassword() {
  const history = useHistory();
  const auth = getAuth(app);
  const [data, setData] = React.useState("");
  const [newPassword, setnewPassword] = React.useState("");
  const [showNewPasswordField, setShowNewPasswordField] = React.useState(false);
  const handleResetPassword = () => {
    if (data === "") {
      toast.error("Please enter email!");
      return;
    }
    console.log(data);
    //`${config.baseUrl}/api/v1/auth/forgotpassword`
    fetch(`${config.baseUrl}/api/v1/auth/forgotpassword`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data }),
    }).then((res) => {
      let promise = res.json();
      if (res.status === 200) {
        promise.then((data) => {
          console.log(data);
          setData(data);
          setShowNewPasswordField(true);
        });
      } else {
        promise.then((err) => {
          toast.error(err.error);
        });
      }
    });
  };
  const resetPassword = () => {
    if (newPassword === "") {
      toast.error("Please enter new password!");
      return;
    }

    fetch("http://localhost:8080/api/v1/auth/updatepassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        newPassword,
      }),
    }).then((res) => {
      let promise = res.json();
      if (res.status === 200) {
        promise.then((data) => {
          localStorage.removeItem("userInfo");
          history.push("/login");
        });
      } else {
        promise.then((err) => {
          toast.error(err.error);
        });
      }
    });
  };
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div class="card">
        <center>
          <img
            src={login}
            alt="login"
            style={{
              width: 60,
              marginTop: 10,
            }}
          />
        </center>
        {showNewPasswordField === true ? (
          <div class="card-body">
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                <i class="fas fa-user"></i>
              </span>
              <input
                type="password"
                class="form-control"
                placeholder="Enter new password"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                value={newPassword}
                onChange={(e) => setnewPassword(e.target.value)}
              />
            </div>
            <br />
            <button
              type="button"
              class="btn btn-dark form-control"
              onClick={resetPassword}
            >
              Reset Password <i class="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
        ) : (
          <div class="card-body">
            <div class="input-group flex-nowrap">
              <span class="input-group-text" id="addon-wrapping">
                <i class="fas fa-user"></i>
              </span>
              <input
                type="email"
                class="form-control"
                placeholder="Enter your registred email"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                onChange={(e) => setData(e.target.value)}
              />
            </div>
            <br />
            <button
              type="button"
              class="btn btn-dark form-control"
              onClick={handleResetPassword}
            >
              Reset Password <i class="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;
