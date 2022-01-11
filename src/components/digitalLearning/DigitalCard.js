import React from "react";
import { useHistory } from "react-router-dom";

function DigitalCard({
  name = "",
  price = "",
  icon = "",
  id = "",
  discp = "",
}) {
  const history = useHistory();
  return (
    <div>
      <div
        class="card box-sadow"
        onClick={() => history.push("/digitalLearning/descp/" + id)}
        style={{ marginBottom: 7, cursor: "pointer" }}
      >
        <div class="card-body">
          <center>
            <i class={icon} style={{ fontSize: 80 }}></i>
          </center>
          <figure class="text-center">
            <blockquote class="blockquote">
              <p>{name}</p>
            </blockquote>
            <p className="text-truncate">{discp}</p>
            <figcaption class="blockquote-footer">
              INR <cite title="Source Title">{price}/-</cite>
            </figcaption>
            {/* <figcaption class="">
              Apply Now <i class="fas fa-long-arrow-alt-right"></i>
            </figcaption> */}
            {/* <button
              type="button"
              class="btn btn-outline-info"
              //   onClick={() => history.push("/creers/descp/" + id)}
            >
              Learn More <i class="fas fa-long-arrow-alt-right"></i>
            </button> */}
          </figure>
        </div>
      </div>
    </div>
  );
}

export default DigitalCard;
