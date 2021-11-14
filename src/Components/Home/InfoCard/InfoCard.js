import React from "react";
import "./InfoCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoCard = ({ info }) => {
  console.log(info);
  return (
    <div className="col-md-4 info-card-container text-white">
      <div className={`d-flex info-container justify-content-center info-${info.background}`} >
        <div className="mx-3">
          <FontAwesomeIcon className="info-icon" icon={info.icon} />
        </div>

        <div>
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
