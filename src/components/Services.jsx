import React from 'react';
import image4 from '../assets/image4.jpg';
import Accordion from './Accordion';
import useWindowInfo from '../hooks/useWindowInfo';

export default function Services() {
     const { mobileDesign } = useWindowInfo();
     return (
          <div
               className={`d-flex w-100 ${
                    mobileDesign
                         ? 'justify-content-center'
                         : 'justify-content-end'
               } position-relative vh-75`}
               id="Services"
          >
               <div className="col-8 bg-gray-100 h-100"></div>
               <div className="col-4 bg-gray-200 h-100"></div>
               {!mobileDesign && (
                    <img
                         src={image4}
                         className="col-8"
                         alt="Mountain with lake"
                    />
               )}
               <Accordion
                    className={`position-absolute top-50 translate-middle-y ${
                         mobileDesign ? 'col-10' : 'col-4 start-10'
                    }`}
               />
          </div>
     );
}
