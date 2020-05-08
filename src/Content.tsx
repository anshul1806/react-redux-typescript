import React from "react";

type ListingT = {
  area: string;
  zip: string;
};

const Content = props => {
  const getareaListted = (listings: Array<ListingT>) => {
    console.log("Div was clicked from the child element.");
  };
  console.log(`listings : ${props.listings}`);
  return (
    <div className="card">
      {/* <img
        src="www.pexels.com/photo/defocused-image-of-lights-255379/"
        className="card-img-top"
        alt="..."
      /> */}
      <div className="btn btn-warning">
        <br />
        <br />
        <br />
        <h3>Yuur listings here</h3>
        <br />
        <br />
      </div>
      <div className="card-body">
        <p className="card-text">Please see more area listing here.</p>
        <div onClick={() => getareaListted(props.listings)}>
          <span>Please browse for more listings in area</span>
          <ul>
            {props.listings.map((value: ListingT, index: any) => {
              return (
                <li key={index}>
                  {value.area} {value.zip}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Content;
