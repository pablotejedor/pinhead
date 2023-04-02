import React from 'react';
import image4 from '../assets/image4.jpg';
import Accordion from './Accordion';

export default function Services() {
  return (
    <div
      className="d-flex justify-content-end w-100 vh-75 position-relative"
      id="Services"
    >
      <img src={image4} className="col-8" alt="Mountain with lake" />
      <Accordion className="position-absolute top-50 start-10 translate-middle-y col-4" />
    </div>
  );
}
