import React from "react";

export default function Location(props) {
  return (
    <div className="location">
      <img
        src={props.data.imageurl}
        alt="mount fuji"
        className="travel-images"
      />
      <div className="location-info">
        <div className="country">
          <img src="location-pin.png" alt="location" className="pin" />
          <h3 className="place">{props.data.location}</h3>
          <a href={props.data.googlemapsurl}>View on Google maps</a>
        </div>
        <h2 className="title">{props.data.title}</h2>
        <span className="dates">
          {props.data.startdate} - {props.data.enddate}
        </span>
        <p>{props.data.description}</p>
      </div>
    </div>
  );
}
