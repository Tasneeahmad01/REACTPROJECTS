// src/pages/Evening.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Component/Menu.css";

const eveningMenu = [
  {
    id: 1,
    image: "https://media.istockphoto.com/id/1443748338/photo/fried-chicken.webp?s=170667a&w=0&k=20&c=fwBK5UT9t6st4hsSEJgseKukcaPav0oocszb5nz3Nc8=",
    name: "Allu Pakodi",
    category: "Snack",
    price: "₹60",
    description: "Crispy potato fritters made with a blend of spices, perfect for an evening snack."
  },
  {
    id: 2,
    image: "https://media.istockphoto.com/id/1345733315/photo/close-up-image-of-fried-samosas-stuffed-with-spiced-potato-peas-and-meat-served-on-a.webp?b=1&s=170667a&w=0&k=20&c=6HDMTELftX5AL4a8rFwpuyvtVUUvVG1auXQHI3qAbMk=",
    name: "Samosa",
    category: "Snack",
    price: "₹60",
    description: "Spicy and savory triangular pastries filled with a mixture of potatoes and peas."
  },
  {
    id: 3,
    image: "https://media.istockphoto.com/id/1453142161/photo/full-frame-image-of-deep-fried-potato-french-fry-chips-side-dish-red-chillis-and-sliced.webp?b=1&s=170667a&w=0&k=20&c=-cDZbB3P83Mu5zHVRD7U1uEE1rzCL_gVQ7A3Qo8WEYM=",
    name: "Chili Potato",
    category: "Snack",
    price: "₹60",
    description: "Crispy potatoes tossed in a spicy, tangy chili sauce with bell peppers and onions."
  },
  {
    id: 4,
    image: "https://media.istockphoto.com/id/685772500/photo/stewed-pork-with-mustard-sauce.jpg?s=612x612&w=0&k=20&c=RcdxBpLqIeYlmIr88rZ-4G58VmjEeeI2kXD8IlP7RAQ=",
    name: "Mutton",
    category: "Main Course",
    price: "₹350",
    description: "Tender and flavorful mutton cooked with aromatic spices, perfect for a hearty meal."
  },
  {
    id: 5,
    image: "https://media.istockphoto.com/id/1828773125/photo/a-goan-meal-thali.webp?b=1&s=170667a&w=0&k=20&c=IYgtJ82d1_Z-y9dceAdhjO3IILJEm850bVnShyI-qQA=",
    name: "Thali",
    category: "Main Course",
    price: "₹60",
    description: "A traditional Indian platter consisting of various dishes served together, offering a taste of multiple flavors."
  },
  {
    id: 6,
    image: "https://media.istockphoto.com/id/1212214276/photo/genius-bhalle.jpg?s=612x612&w=0&k=20&c=gb8wN5-bZfhC36L_JQkvyCC5gg7L8bonX0QoJPG-R0A=",
    name: "Dahi Vadai",
    category: "DAHI-BBADAI",
    price: "₹60",
    description: "Dahi Vada or Dahi Bhalle are fried lentil dumplings, topped with curd, sweet and green chutney and spices.."
  },
  {
    id: 7,
    image: "https://media.istockphoto.com/id/1411786526/photo/rasmalai.webp?b=1&s=170667a&w=0&k=20&c=bmwy603z44JTyznMMUdC1gRVUuE89gyMhCJL8NSXpUs=",
    name: "Rash Malai",
    category: "RUSH-MALAI",
    price: "₹250",
    description: "A rich and indulgent dessert featuring layers of creamy rasmalai and exotic flavors."
  },
  {
    id: 8,
    image: "https://media.istockphoto.com/id/1142967833/photo/lassi_01.webp?b=1&s=170667a&w=0&k=20&c=8YnOzkNjKr7ZkoBkzLWtwLlz3D17Y1cHQUB1lin4FJU=",
    name: "Badam shake",
    category: "BADAM-SHAKE",
    price: "₹60",
    description: "A rich and indulgent dessert featuring layers of creamy goodness and exotic flavors."
  },
  {
    id: 9,
    image: "https://media.istockphoto.com/id/852776606/photo/shrikhand.jpg?s=612x612&w=0&k=20&c=Xegf3caG8d3PwxTPaIDB3NI74VVE5QNLhrurSAYyEio=",
    name: "Butter Lassi",
    category: "BUTTER LASSI",
    price: "₹299",
    description: "Indian Cuisine Shrikhand isolated on white."
  },
  {
    id: 10,
    image: "https://media.istockphoto.com/id/852776606/photo/shrikhand.jpg?s=612x612&w=0&k=20&c=Xegf3caG8d3PwxTPaIDB3NI74VVE5QNLhrurSAYyEio=",
    name: "Butter Lassi",
    category: "BUTTER LASSI",
    price: "₹299",
    description: "Indian Cuisine Shrikhand isolated on white."
  },
  {
    id: 11,
    image: "https://media.istockphoto.com/id/852776606/photo/shrikhand.jpg?s=612x612&w=0&k=20&c=Xegf3caG8d3PwxTPaIDB3NI74VVE5QNLhrurSAYyEio=",
    name: "Butter Lassi",
    category: "BUTTER LASSI",
    price: "₹299",
    description: "Indian Cuisine Shrikhand isolated on white."
  },
  {
    id: 12,
    image: "https://media.istockphoto.com/id/852776606/photo/shrikhand.jpg?s=612x612&w=0&k=20&c=Xegf3caG8d3PwxTPaIDB3NI74VVE5QNLhrurSAYyEio=",
    name: "Butter Lassi",
    category: "BUTTER LASSI",
    price: "₹299",
    description: "Indian Cuisine Shrikhand isolated on white."
  },
];

const Evening = () => {
  return (
    <>
      <h1 style={{textAlign:"center", marginTop:"20px", fontSize:"30px", fontFamily:"-moz-initial"}}>Evening Food</h1>
      <div className="card-container">
        {eveningMenu.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} className="card-image" />
            <div className="card-body">
              <div className="card-number-container">
                <span className="card-number subtle">{item.id}</span>
              </div>&nbsp;
              <span className="card-author subtle">{item.category}</span>
              <h1 className="card-title">{item.name}</h1>
              <span className="card-description subtle">{item.description}</span>
              <div className="card-price subtle">{item.price}</div>
              <div className="card-read">Read...</div>
            </div>
            <Link to="/order"><button className="card-tag subtle">Order Now</button></Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Evening;
