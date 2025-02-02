import React from "react";
import "./Cards.css";
import CardComponent from "../CardComponent/CardComponent";

function Cards({ TestimonialCardData }) {
  return (
    <div className="YT-Testimonial-Cards  block1">
      {TestimonialCardData?.map((e, index) => {
        return (
          <CardComponent 
            key={index}
            title={e.title}
            desc={e.desc}
            img={e.img}
            name={e.name}
            career={e.career}
          />
        );
      })}
    </div>
  );
}

export default Cards;
