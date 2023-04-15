import React from 'react';
import logo from '../assets/logo.png';
import useWindowInfo from '../hooks/useWindowInfo';

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

     const { mobileDesign } = useWindowInfo();

     return (
          <div className="d-flex flex-column w-100 vh-100 header-container position-relative justify-content-center">
               {/* Logo and buttons */}
               <div
                    className={`d-flex ${
                         mobileDesign ? 'flex-column' : 'p-5'
                    } align-items-center justify-content-between text-light header-buttons position-absolute top-0 w-100`}
                    style={{ backdropFilter: 'blur(20px)' }}
               >
                    {!mobileDesign && (
                         <img src={logo} alt="logo" className="ms-5" />
                    )}
                    <div
                         className={`d-flex align-items-center ${
                              mobileDesign &&
                              'my-5 px-4 justify-content-between w-100'
                         }`}
                    >
                         {menuItems.map((item) => (
                              <span
                                   className={`fs-6 ${
                                        mobileDesign ? '' : 'mx-4'
                                   } cursor-pointer text-shadow`}
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
                    className={`d-flex flex-column ${
                         mobileDesign
                              ? 'align-items-center'
                              : 'align-items-start ps-5 ms-5'
                    } text-light`}
                    id="Home"
               >
                    <div className="d-flex flex-column justify-content-start">
                         <h1 className="m-0 fs-1 fw-bold font-poppins">
                              Sed ut perspiciatis <br /> unde omnis iste natus
                         </h1>
                         <p className="my-5">
                              Sed ut perspiciatis unde omnis iste natus error{' '}
                              <br /> sit voluptatem accusantium doloremque.
                         </p>
                         <div
                              className={`d-flex justify-content-center bg-orange rounded-pill py-3 ${
                                   mobileDesign ? 'col-5 px-4' : 'col-4 px-5'
                              } cursor-pointer`}
                         >
                              Read more
                         </div>
                    </div>
               </div>
          </div>
     );
}
