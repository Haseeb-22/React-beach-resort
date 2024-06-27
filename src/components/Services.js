import React from 'react';
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icons: <FaCocktail />,
      title: "Free Cocktails",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, a?"
    },
    {
      icons: <FaHiking />,
      title: "Endless Hiking",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, a?"
    },
    {
      icons: <FaShuttleVan />,
      title: "Free Shuttle Van",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, a?"
    },
    {
      icons: <FaBeer />,
      title: "Strongest Beer",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, a?"
    },
  ];

  return (
    <div className='services'>
      <Title title="Services" />
      <div className="services-center">
        {services.map((item, index) => (
          <article key={index} className="service">
            <span>{item.icons}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Services;
