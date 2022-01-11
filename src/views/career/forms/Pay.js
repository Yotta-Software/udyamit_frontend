import React from "react";
import pay from "../../../utils/pay";

function Pay({ id, uid, body, email }) {
  const handlePay = () => {
    // body.jobId = id;
    pay(id, uid, body);
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
      <div class="card">
        <div class="card-header">Payment</div>
        <div class="card-body">
          <h5 class="card-title">{email}</h5>
          <p class="card-text">{id}</p>
          <button class="btn btn-primary" onClick={handlePay}>
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pay;
