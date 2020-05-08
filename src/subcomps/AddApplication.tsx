import React from "react";
import Basic from "../forms/AddNewApplication";
import divbk1 from "../images/divbk1.jpg";

const AddApplication = props => {
  console.log(props);
  const onAdd = event => {
    console.log("clicked for adding new App.");
  };

  const newApplication = {
    name: "",
    owner: ""
  };
  return (
    <>
      <div className="card">
        <img src={divbk1} className="bk card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Add new application</h5>
          <div className="card-text">
            <Basic />
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">
                  app
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
            <div className="input-group flex-nowrap">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">
                  owner
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Application Owner"
                aria-label="Application Owner"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
        </div>
        <a href="www.intel.com" className="btn btn-primary" onClick={onAdd}>
          +Add
        </a>
      </div>
    </>
  );
};
export default AddApplication;
