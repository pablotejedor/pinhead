import React from 'react';
import logo from '../assets/logo.png';

export default function Header() {
  const menuItems = [
    {
      name: 'Home',
      url: 'Home',
    },
    {
      name: 'About',
      url: 'About',
    },
    {
      name: 'Producs',
      url: 'Products',
    },
    {
      name: 'Services',
      url: 'Services',
    },
    {
      name: 'Contact',
      url: 'Contact',
    },
  ];

  const clickHandler = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="d-flex flex-column w-100 vh-100 header-container position-relative justify-content-center">
      {/* Logo and buttons */}
      <div className="d-flex align-items-center justify-content-between text-light p-5 header-buttons position-absolute top-0 w-100">
        <img src={logo} alt="logo" className="ms-5" />
        <div className="d-flex align-items-center">
          {menuItems.map((item) => (
            <span
              className="fs-6 mx-4 cursor-pointer"
              key={item.url}
              onClick={() => clickHandler(item.url)}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
      {/* Logo and buttons */}

      <div
        className="d-flex flex-column align-items-start text-light ps-5 ms-5"
        id="Home"
      >
        <h1 className="m-0 fs-1 fw-bold font-poppins">
          Sed ut perspiciatis <br /> unde omnis iste natus
        </h1>
        <p className="my-5">
          Sed ut perspiciatis unde omnis iste natus error <br /> sit voluptatem
          accusantium doloremque.
        </p>
        <div className="bg-orange rounded-pill py-3 px-5 cursor-pointer">
          Read more
        </div>
      </div>
    </div>
  );
}
