import React from "react";
const Listing = props => {
  return (
    <div className="alert alert-primary" role="alert">
      A simple primary alert with
      <a className="alert-link" href="www.intel.com">
        an example link
      </a>
      <div>
        <p> Address : {props.address}</p>
        <p> Zip : {props.zip}</p>
        <p> Country : {props.country}</p>
      </div>
    </div>
  );
};

export default Listing;
