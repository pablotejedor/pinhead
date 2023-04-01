import React, { useState } from 'react';
import { UilAngleDown, UilAngleUp } from '@iconscout/react-unicons';

export default function Accordion({ className }) {
  const [activeItem, setActiveItem] = useState(997);

  const clickHandler = (id) => {
    if (activeItem === id) {
      return setActiveItem(null);
    }
    setActiveItem(id);
  };

  const accordionItems = [
    {
      title: 'Sed ut perspiciatis',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      id: 997,
    },
    {
      title: 'Sed ut perspiciatis',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      id: 998,
    },
    {
      title: 'Sed ut perspiciatis',
      content:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      id: 999,
    },
  ];

  return (
    <div className={`d-flex flex-column ${className}`}>
      {accordionItems.map((item, index, array) => (
        <div className="d-flex flex-column" key={item.id}>
          {/* Title */}
          <div
            className={`d-flex align-items-center justify-content-between bg-gray-100 p-4 cursor-pointer border-accordion ${
              index === 0 && 'rounded-top'
            } ${
              index === array.length - 1 &&
              activeItem !== item.id &&
              'rounded-bottom'
            }`}
            key={item.id}
            onClick={() => clickHandler(item.id)}
          >
            <h6 className="m-0 text-gray-300">{item.title}</h6>
            {activeItem === item.id ? (
              <UilAngleUp size={30} color="#e0752f" />
            ) : (
              <UilAngleDown size={30} color="#E0752F" />
            )}
          </div>
          {/* Title */}
          {/* Content */}
          {activeItem === item.id && (
            <div
              className={`p-4 bg-white border-accordion ${
                index === array.length - 1 && 'rounded-bottom'
              }`}
            >
              <p className="m-0 text-gray-300">{item.content}</p>
            </div>
          )}
          {/* Content */}
        </div>
      ))}
    </div>
  );
}
