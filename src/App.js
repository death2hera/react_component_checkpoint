import React, { Component } from "react";
import './App.css';
import Profilepicture from "./Component/profile/Profilephoto";
import Fullname from "./Component/profile/Fullname";
import Address from "./Component/profile/Address";
const App = () => {
 return (
    <>
      <div className="App">
        <h1>
          Welcome!!
        </h1>
        <Profilepicture/>
        <Fullname/>
        <p>
          we are aware you want to sell your property at <Address/>
        </p>
        <p>
          remember to contact us via our gmail, twitter and instagram accounts.
        </p>

      </div>
    </>
 );
};
export default App;