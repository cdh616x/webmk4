//jshint esversion:6

import React from "react";

function Footer() {

  const date = new Date();
  let year = date.getYear();

  return (

  <footer id="footer">
  <p>Created by Collin Hooper</p>
  <p>Copyright {year + 1900}</p>
  </footer>
)
};

export default Footer;
