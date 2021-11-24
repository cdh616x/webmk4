//jshint esversion:6

import React from "react";
import NavBar from "./navbar.jsx";


const date = new Date();
let hour = date.getHours();
let greeting = "";
let day = date.getDay();
let whatDay = "";


function Header() {

  if (day === 0) {
    whatDay = "Sunday!";
  } else if (day === 1) {
    whatDay = "Monday!";
  } else if (day === 2) {
    whatDay = "Tuesday!";
  } else if (day === 3) {
    whatDay = "Wednesday!";
  } else if (day === 4) {
    whatDay = "Thursday!";
  } else if (day === 5) {
    whatDay = "Friday!";
  } else {
    whatDay = "Saturday!";
  }


  if (hour < 8){
    greeting = "Good (early) morning; happy ";
  } else if (hour < 12){
    greeting = "Good morning; happy ";
  } else if (hour < 18){
    greeting = "Good afternoon; happy ";
  } else {
    greeting = "Good evening; happy ";
  }
    return (
      <div>
      <div>
      <NavBar />
      <div className="center">
        <h1 className="greeting">{greeting}{whatDay}</h1>
        <p className="name">I am Collin, a programmer.</p>
      </div>
      </div>
      </div>);

  };//double wrap everything to return in div to make on big div

export default Header;
