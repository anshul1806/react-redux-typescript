import React, { useState } from "react";
import Listing from "./Listing";

//impor t { IListing, IRandomI } from "./AppTypes";

const AppFx = () => {
  const [{ listings, message }, updateListings] = useState({
    listings: [
      { address: "Arizona", zip: "85233", country: "USA" },
      { address: "Delhi", zip: "85233", country: "india" },
      { address: "Pakistan", zip: "85233", country: "Pakistan" },
      { address: "Maine", zip: "85233", country: "USA" },
      { address: "KeyWest", zip: "85233", country: "USA" },
      { address: "NorthWest", zip: "85233", country: "USA" }
    ],
    message: "Welcome to ZEE-LOW purcahse center.."
  });

  const handleAddActions = e => {
    console.log(`Add handle click called..Wait for action magic ${e}`);
    updateListings({
      listings: [
        { address: "Arizona-A", zip: "85233", country: "USA" },
        { address: "Delhi-B", zip: "85233", country: "india" },
        { address: "Pakistan-C", zip: "85233", country: "Pakistan" },
        { address: "Maine-D", zip: "85233", country: "USA" },
        { address: "KeyWest-E", zip: "85233", country: "USA" },
        { address: "NorthWest-F", zip: "85233", country: "USA" }
      ],
      message: "Welcome to ZEE-LOW purchase center."
    });
  };

  const handleRemoveActions = e => {
    console.log(`Remove handle  called..Wait for action magic ${e}`);
    console.log(`Add handle click called..Wait for action magic ${e}`);
    updateListings({
      listings: [
        { address: "Arizona", zip: "85233", country: "USA" },
        { address: "Delhi", zip: "85233", country: "india" },
        // { address: "Pakistan", zip: "85233", country: "Pakistan" },
        // { address: "Maine", zip: "85233", country: "USA" },
        { address: "KeyWest", zip: "85233", country: "USA" },
        { address: "NorthWest", zip: "85233", country: "USA" }
      ],
      message: "Welcome to ZEE-LOW purchase center."
    });
  };

  return (
    <div className="divBordered">
      <h5>{message}</h5>
      <div className="table">
        listings goes
        <div>
          {listings.map(listing => (
            <Listing {...listing} />
          ))}
        </div>
        <p>
          Listing #1 {listings[0].address} {listings[0].zip}{" "}
          {listings[0].country} {}{" "}
        </p>
        <p>
          Listing #2 {listings[1].address} {listings[1].zip}{" "}
          {listings[1].country} {}{" "}
        </p>
        <p>
          Listing #2 {listings[2].address} {listings[2].zip}{" "}
          {listings[2].country} {}{" "}
        </p>
        <p>
          Listing #3 {listings[3].address} {listings[3].zip}{" "}
          {listings[3].country} {}{" "}
        </p>
        <b> Total listings : </b>
        {listings.length}
        <br />
        <br />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleAddActions}
      >
        Add More addresses
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={handleRemoveActions}
      >
        Remove sold places.
      </button>
    </div>
  );
};

export default AppFx;
