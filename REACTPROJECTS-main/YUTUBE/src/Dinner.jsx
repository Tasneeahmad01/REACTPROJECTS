// src/pages/Evening.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./Component/Menu.css";

const eveningMenu = [
  {
    id: 1,
    image: "https://post.healthline.com/wp-content/uploads/2021/11/oatmeal-bowl-1296x728-header-1296x729.jpg",
    name: "Allu Pakodi",
    category: "Snack",
    price: "₹60",
    description: "Crispy potato fritters made with a blend of spices, perfect for an evening snack."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Bacon Strips",
    category: "Snack",
    price: "₹399",
    description: "Spicy and savory triangular pastries filled with a mixture of potatoes and peas."
  },
  {
    id: 3,
    image: "https://media.istockphoto.com/id/1058029096/photo/chicken-biryani.webp?b=1&s=170667a&w=0&k=20&c=N_sr3z9AHkIXXJcQPTxcIsCjMM7RWQFPkMGk8_VM3pE=",
    name: "Fry Biryani",
    category: "FRENCH BIRYANI",
    price: "₹580",
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
    image: "https://media.istockphoto.com/id/540978770/photo/sirloin-steaks-on-the-bbq.webp?b=1&s=170667a&w=0&k=20&c=DqowKAJR3hRgyn5dcIuDaFdWOd6LetWPdBmClM2j3fw=",
    name: "STEAK ROLE",
    category: "STEAK",
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
    image: "https://static.samacharjagatlive.com/newscdn/resources/uploads/ALL-NEWS/06042023/1680775106.jpg",
    name: "Kaju shake",
    category: "kAJU-SHAKE",
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
       <h1 style={{textAlign:"center", marginTop:"20px", fontSize:"30px", fontFamily:"-moz-initial"}}>Dinner Food</h1>
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
