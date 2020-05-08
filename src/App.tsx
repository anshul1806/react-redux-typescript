import * as React from "react";
import "./styles.css";
// import Header from "./header";
import Content from "./Content";
import AppFx from "./App-FC";

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
    // let newObj = { area: "000000000", zip: "8533444-" };
    // this.setState(...this.state.listings, { area: "Chandler", zip: "85233" });
  };
  render() {
    return (
      <>
        <AppFx />
        <div className="App">
          <h1>ZILA-LOW</h1>
          {/* <Header user={user} clickedEvent={handleClick} />
        <Header user={user2} clickedEvent={handleClick} /> */}
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.changeNameHandler} // don't add parentheis  here and that would treated like a reference function being passed.
          >
            Change the base address :
          </button>
          <Content
            text="{state.listings[0].area}"
            listings={this.state.listings}
          />
        </div>
      </>
    );
  }
}
