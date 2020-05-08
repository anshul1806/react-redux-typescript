import React from "react";
const Listing = props => {
  return (
    <div className="alert alert-primary" role="alert">
      <p> Application : {props.application}</p>
      <a className="alert-link" href="www.intel.com">
        <p> Url : {props.application}</p>
      </a>
      <div>
        <p> Owner : {props.owner}</p>
        <p> Country : {props.country}</p>
      </div>
    </div>
  );
};

export default Listing;
