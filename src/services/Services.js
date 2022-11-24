import React from "react";
import "../services/services.css";

export default function Services({ image, text }) {
  return (
    <div className="box-services">
      <img className="image-serv" src={image} alt="description" />
      <p>{text}</p>
    </div>
  );
}
