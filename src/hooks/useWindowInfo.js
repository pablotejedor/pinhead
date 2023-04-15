import { useState, useEffect } from 'react';

export default function useWindowInfo() {
     const [windowInfo, setWindowInfo] = useState({
          height: null,
          width: null,
          mobileDesign: document.body.clientWidth < 480 ? true : false,
     });

     useEffect(() => {
          const handleResize = () => {
               setWindowInfo({
                    height: document.body.clientHeight,
                    width: document.body.clientWidth,
                    mobileDesign:
                         document.body.clientWidth < 480 ? true : false,
               });
          };

          window.addEventListener('resize', handleResize);

          handleResize();

          return () => window.removeEventListener('resize', handleResize);
     }, []);

     return windowInfo;
}
