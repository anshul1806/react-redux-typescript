import React from "react";
import divbk1 from "../images/divbk1.jpg";
const AddApplication = props => {
  console.log(props);
  return (
    <>
      <div className="card">
        <img src={divbk1} className="bk card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Add new application</h5>
          <div className="card-text">
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">
                  @
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Application Name"
                aria-label="Application Name"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <a href="www.intel.com" className="btn btn-primary">
            Add New Application
          </a>
        </div>
      </div>
    </>
  );
};
export default AddApplication;
