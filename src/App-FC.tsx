import React, { useState } from "react";
import Listing from "./Listing";

const AppFx = () => {
  const [{ applications, message }, updateListings] = useState({
    applications: [
      { id: 1, application: "PLA", owner: "ADTS-Design", country: "USA" },
      { id: 2, application: "RACE", owner: "ADTS-Design", country: "india" },
      {
        id: 3,
        application: "SPIDER",
        owner: "ADTS-Design",
        country: "Pakistan"
      },
      { id: 4, application: "PDB", owner: "ADTS-Design", country: "USA" },
      { id: 5, application: "Helios", owner: "ADTS-Design", country: "USA" },
      { id: 6, application: "E2E", owner: "ADTS-Design", country: "USA" }
    ],
    message: "R.A.C.E Runtime Application Configuration Engine..."
  });

  const handleAddActions = e => {
    console.log(`Add handle click called..Wait for action magic ${e}`);
    const newList = [...applications];
    newList.push({
      id: newList.length + 1,
      application: "Random-App",
      owner: "ADTS-Design",
      country: "USA"
    });
    updateListings({
      applications: newList,
      message: "R.A.C.E (App removed)"
    });
  };

  const handleRemoveActions = e => {
    console.log(`Remove handle  called..Wait for action magic ${e}`);
    const newList = [...applications];
    newList.pop();

    updateListings({
      applications: newList,
      message: "R.A.C.E (App removed)"
    });
  };

  return (
    <div className="divBordered">
      <h5>{message}</h5>
      <div className="table">
        applications goes
        <div>
          {applications.map(listing => (
            <Listing {...listing} />
          ))}
        </div>
        <b> Total Applications : </b>
        {applications.length}
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
  );
};

export default AppFx;
