//jshint esversion:6

import React from "react";

function NavBar() {
  return(
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-#062743" style={{backgroundColor: "#B91646"}}>
      <a class="navbar-brand" href="index.html">
        <div class="container-fluid">
          <img src="./images/Skull.png" width="50" height="50" alt="mnm" />
          LZ Labs
          </div>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
              <a class="nav-link" href="index.html">
                <button type="button" class="btn btn-outline-light btn-sm" name="button">
                  Home
                </button>
              </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="projects.html">
              <button type="button" class="btn btn-outline-light btn-sm" name="button">
                Projects
            </button>
           </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="goodies.html">
              <button type="button" class="btn btn-outline-light btn-sm" name="button">
                Goodies
              </button>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact_info.html">
              <button type="button" class="btn btn-outline-light btn-sm" name="button">
              Contact
            </button>
          </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
};

export default NavBar;
