import React from "react";
// import logo from '../assets/logo';
// console.log(logo);

const Offers = (props) => {
  return (
    <div>
      <section className="offers">
        <div className="container">
          {props.offer.map((off, index) => (
            <img key={index} className="offer" src={off} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Offers;
