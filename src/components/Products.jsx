import React, { useState } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image3.jpg';
import image3 from '../assets/image6.jpg';
import {
     UilArrowCircleLeft,
     UilArrowCircleRight,
} from '@iconscout/react-unicons';
import useWindowInfo from '../hooks/useWindowInfo';

export default function Products() {
     const data = [
          {
               image: image1,
               title: 'Título de la imagen 1',
               subTitle: 'Subtítulo 1',
               content: 'Contenido 1',
          },
          {
               image: image2,
               title: 'Título de la imagen 2',
               subTitle: 'Subtítulo 2',
               content: 'Contenido 2',
          },
          {
               image: image3,
               title: 'Título de la imagen 3',
               subTitle: 'Subtítulo 3',
               content: 'Contenido 3',
          },
     ];

     const [step, setStep] = useState(0);

     const prevStep = () => {
          if (step === 0) {
               setStep(data.length - 1);
          } else {
               setStep((step) => step - 1);
          }
     };

     const nextStep = () => {
          if (step === data.length - 1) {
               setStep(0);
          } else {
               setStep((step) => step + 1);
          }
     };

     const { mobileDesign } = useWindowInfo();

     return (
          <div
               className={`d-flex w-100 ${
                    mobileDesign ? 'vh-50' : 'vh-100'
               } position-relative`}
               id="Products"
          >
               <div className="col-8 bg-gray-100 h-100"></div>
               <div className="col-4 bg-gray-200 h-100"></div>

               <div
                    className={`position-absolute top-50 start-50 translate-middle ${
                         mobileDesign ? 'w-100 h-75' : 'vw-75 vh-75'
                    }`}
                    style={{
                         backgroundImage: `url(${data[step].image})`,
                         backgroundRepeat: 'no-repeat',
                         backgroundSize: 'cover',
                    }}
               >
                    <div
                         className={`d-flex flex-column justify-content-center align-items-start ${
                              mobileDesign ? 'p-3' : 'p-5'
                         } position-absolute bottom-0 end-0 bg-orange text-light w-50`}
                    >
                         {!mobileDesign && (
                              <>
                                   <p className="m-0 fw-bold">
                                        {data[step].subTitle}
                                   </p>
                                   <h1 className="mb-4">{data[step].title}</h1>
                                   <p>{data[step].content}</p>
                              </>
                         )}

                         <div
                              className={`d-flex ${
                                   mobileDesign
                                        ? 'justify-content-center'
                                        : 'justify-content-end'
                              } align-items-center w-100`}
                         >
                              <UilArrowCircleLeft
                                   className={`cursor-pointer ${
                                        mobileDesign && 'me-3'
                                   }`}
                                   color="#222"
                                   size={35}
                                   onClick={() => prevStep()}
                              />
                              <UilArrowCircleRight
                                   className={`cursor-pointer ${
                                        mobileDesign && 'ms-3'
                                   }`}
                                   color="#222"
                                   size={35}
                                   onClick={() => nextStep()}
                              />
                         </div>
                    </div>
               </div>
          </div>
     );
}
