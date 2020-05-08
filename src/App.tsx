import * as React from "react";
import "./styles.css";
// import Header from "./header";
import Content from "./Content";
import AppFx from "./App-FC";
import AddApplication from "./subcomps/AddApplication";

// //https://www.pluralsight.com/guides/how-to-handle-communication-between-parent-and-child-components-in-reactjs

// export default function App() {

export default class App extends React.Component {
  /**
   *
   */
  state = {
    listings: [
      { area: "Chandler", zip: "85233" },
      { area: "Maricopa", zip: "85233" },
      { area: "Sedona", zip: "209862" },
      { area: "Scottsdale", zip: "209862" }
    ]
  };
  handleClick = () => {
    console.log("AN event came in from the client");
    alert("action inside parent for something that child caused.");
  };
  user = {
    name: "Anshul pandey",
    address: "147  W Bethestha Dr, Maine,USA"
    //parentHandler: handleClick
  };

  user2 = {
    name: "Archana pandey",
    address: "177  W Bethestha Dr, Maine,USA"
    //click: handleClick
  };

  changeNameHandler = () => {
    console.log("Was Clicked ------> Click name handler.");
  };
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <AddApplication />
            </div>
            <div className="col-sm-9">
              <div className="App">
                <h1 className="headr">R.A.C.E</h1>
                <AppFx />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.changeNameHandler} // don't add parentheis  here and that would treated like a reference function being passed.
                >
                  Geenric Action Button :
                </button>
                {/* <Content
                  text="{state.listings[0].area}"
                  listings={this.state.listings}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
