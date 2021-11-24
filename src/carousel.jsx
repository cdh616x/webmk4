//jshint esversion:6

import React from "react";

function Carousel() {
  return(
    <div>
    <section id="carousel">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" data-bs-interval="4000" pause="hover">
      <div class="carousel-inner">
        <div class="carousel-item car1 active">
          <div class="container-fluid car1">
            <h3>Education</h3>
            <h4>Leuphana Universität Lüneburg, Germany | Bachelor of Arts: Political Science (m.) philosophy</h4>
            <div class="row">
            <p>
              Noteable things: Assimilated to a new culture, first experience with programming, learned to play guitar and played with my first band, became fluent in German
            </p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container-fluid car2">
            <h3>Skills</h3>
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                <h4>Front-end development/UI design</h4>
                <h4>JavaScript & Python</h4>
                <h4>Statistical analysis (R Studio)</h4>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                <h4>Guitar playin'</h4>
                <h4>Music Production</h4>
                <h4>Critical thinking and problem solving</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container-fluid car3">
            <h3>Interests</h3>
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                <h4>Music</h4>
                <h4>Technology</h4>
                <h4>Simulation theory and physics concepts</h4>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                <h4>Plants, animals and nature</h4>
                <h4>Gardening</h4>
                <h4>Space</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container-fluid car4">
            <h3>Other Experience</h3>
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                <h4>Intermediate Carpentry</h4>
                <h4>Field Deturfing</h4>
                <h4>Basic Landscaping</h4>
              </div>
              <div class="col-lg-6 col-md-12 col-sm-12">
                <h4>Two different bands, one self-established</h4>
                <h4>Audio Recording</h4>
                <h4>Bootstrap, jQuery, GitHub</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
};

export default Carousel;
