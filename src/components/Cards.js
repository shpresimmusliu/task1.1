import React from "react";
import Image from './images/img2.jpg';
import ClientCard from "./ClientCard";
import './styles/cards.css';

const Data = [
  {
    date: "3.3.0 (14/05/2018)",
    text: "New",
    color: "Green",
    image: Image,
    name: "Kevin Joe",
    desc: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive various bug fixes and stability improvements. Share permissions re-design and optimization ",
  },


  {
    date: "3.1.0 (20/05/2015)",
    text: "Fix",
    color: "Blue",
    image: Image,
    name: "Kevin Joe",
    desc: "Introdution Host Cloud Drive - virtual drive functionality New Share options and menagment New, more user friendly design Sync optimizations Various performance improvments and bug fixes",
  },


  {
    date: "3.1.0 (20/05/2015)",
    text: "Improvement",
    color: "Purple",
    image: Image,
    name: "Kevin Joe",
    desc: "Added Settings for Audio Start Added Update Notification Speed Optimization Bug Fixes",
  },
  {
    date: "3.3.0 (14/05/2018)",
    text: "New",
    color: "Green",
    image: Image,
    name: "Kevin Joe",
    desc: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive various bug fixes and stability improvements. Share permissions re-design and optimization ",
  },


  {
    date: "3.1.0 (20/05/2015)",
    text: "Fix",
    color: "Blue",
    image: Image,
    name: "Kevin Joe",
    desc: "Introdution Host Cloud Drive - virtual drive functionality New Share options and menagment New, more user friendly design Sync optimizations Various performance improvments and bug fixes",
  },


  {
    date: "3.1.0 (20/05/2015)",
    text: "Improvement",
    color: "Purple",
    image: Image,
    name: "Kevin Joe",
    desc: "Added Settings for Audio Start Added Update Notification Speed Optimization Bug Fixes",
  },
  {
    date: "3.3.0 (14/05/2018)",
    text: "New",
    color: "Green",
    image: Image,
    name: "Kevin Joe",
    desc: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive various bug fixes and stability improvements. Share permissions re-design and optimization ",
  },


  {
    date: "3.1.0 (20/05/2015)",
    text: "Fix",
    color: "Blue",
    image: Image,
    name: "Kevin Joe",
    desc: "Introdution Host Cloud Drive - virtual drive functionality New Share options and menagment New, more user friendly design Sync optimizations Various performance improvments and bug fixes",
  },


  {
    date: "3.1.0 (20/05/2015)",
    text: "Improvement",
    color: "Purple",
    image: Image,
    name: "Kevin Joe",
    desc: "Added Settings for Audio Start Added Update Notification Speed Optimization Bug Fixes",
  }
];

const Cards = () => {
  return <div className="cards">
      <div className="client-cards">
          {Data.map((props) => {
              return (
                  <ClientCard 
                  date = {props.date}
                  text = {props.text}
                  color = {props.color}
                  image = {props.image}
                  name = {props.name}
                  desc = {props.desc}
                  />
              )
          })}
      </div>
  </div>;
};

export default Cards;
