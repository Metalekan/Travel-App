import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaMapPin } from 'react-icons/fa';

export default function ({item}) {
  let {imageUrl,description, location, googleMapsUrl, title, endDate, startDate} = item
  return (
  <section>
    <div className="travel-card">

      <div className="travel-card-img">
        <img
          src={(imageUrl)}
          className="card-img" 
          alt="destination"
          />
      </div>
      
      <div className="travel-card-content">
        <div className="travel-card-content-location">
          <FaMapPin/>
          <h6
          className="fw-bold">{location}</h6>
          <a 
            href={googleMapsUrl}
            >
            View on Google Maps
          </a>
        </div>
        <h2>{title}</h2>
        <div className="travel-card-content-date">
          <span>{startDate}-{endDate}</span>
        </div>
        <div className="travel-card-content-description">
          <p>{description}</p>
        </div>
      </div>

    </div>
    <hr />
  </section>
)}