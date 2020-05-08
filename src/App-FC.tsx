import React, { useState } from "react";
import Listing from "./Listing";

const AppFx = () => {
  const [appState, updateListings] = useState({
    applications: [
      {
        id: 1,
        application: "Process Life Cycle",
        owner: "Design",
        country: "USA"
      },
      { id: 2, application: "RACE", owner: "Design", country: "india" },
      {
        id: 3,
        application: "SPIDER",
        owner: "Design",
        country: "Pakistan"
      },
      { id: 4, application: "PDB", owner: "Design", country: "USA" },
      { id: 5, application: "Helios", owner: "Design", country: "USA" },
      { id: 6, application: "E2E", owner: "Design", country: "USA" }
    ],
    Owners: ["SaM Mirza", "Sudhanshu Sarkar", "Bethe", "Rayank"],
    message: "R.A.C.E Runtime Application Configuration Engine..."
  });

  const handleAddActions = e => {
    console.log(`Add handle click called..Wait for action magic ${e}`);
    const newState = Object.assign({}, appState);
    newState.applications.push({
      id: newState.applications.length + 1,
      application: "Random-App",
      owner: "Design",
      country: "USA"
    });
    updateListings(newState);
  };

  const handleRemoveActions = e => {
    console.log(`Remove handle  called..Wait for action magic ${e}`);
    const newState = Object.assign({}, appState);
    newState.applications.pop();
    updateListings(newState);
  };

  return (
    <>
      <div className="divBordered">
        <h5>{appState.message}</h5>
        <div className="table">
          applications goes
          <div>
            {appState.applications.map(listing => (
              <Listing {...listing} />
            ))}
          </div>
          <b> Total Applications : </b>
          {appState.applications.length}
          <br />
          <br />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddActions}
        >
          Add applications
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleRemoveActions}
        >
          Remove unused apps
        </button>
      </div>

      {/* <div className="modal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AppFx;
