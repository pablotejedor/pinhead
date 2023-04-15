import React from 'react';
import logo from '../assets/logo.png';
import useWindowInfo from '../hooks/useWindowInfo';

export default function Footer() {
     const { mobileDesign } = useWindowInfo();

     return (
          <div
               className={`d-flex align-items-center justify-content-between bg-gray-300 ${
                    mobileDesign ? 'px-4' : 'px-9'
               } py-5 w-100`}
          >
               <p className="m-0 text-gray-100">2020 © All rights reserved.</p>
               <img src={logo} alt="logo" className="" />
          </div>
     );
}
