import React from 'react';
import logo from '../assets/logo.png';
export default function Footer() {
  return (
    <div className="d-flex align-items-center justify-content-between bg-gray-300 py-5 px-9 w-100">
      <p className="m-0 text-gray-100">2020 © All rights reserved.</p>
      <img src={logo} alt="logo" className="" />
    </div>
  );
}
