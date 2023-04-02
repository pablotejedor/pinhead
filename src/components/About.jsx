import React from 'react';

export default function About() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center w-100 vh-75 p-5 position-relative"
      id="About"
    >
      <div className="d-flex flex-column align-items-start font-poppins mb-5 w-50">
        <h1 className="m-0 fw-bold text-gray-300">We Help Businesses</h1>
        <h1 className="m-0 fw-bold text-orange">Grow and Innovate</h1>
      </div>
      <p className="m-0 w-50 lh-lg text-gray-300">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut
      </p>

      {/* Orange line on the left */}
      <div className="bg-orange position-absolute start-0 h-75 vw-2"></div>
      {/* Orange line on the left */}
    </div>
  );
}
