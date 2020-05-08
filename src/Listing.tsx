import React from "react";
const Listing = props => {
  const listingAddAction = event => {
    const { name, target } = event;
    console.log(`${name} is ${target}....`);
  };
  const listingRemoveAction = event => {};
  return (
    <>
      {/* <div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={listingAddAction}
        >
          + Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={listingRemoveAction}
        >
          - Remove
        </button>
      </div> */}
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
    </>
  );
};

export default Listing;
