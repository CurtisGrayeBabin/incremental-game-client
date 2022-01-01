import React from "react";
import "./NewsSection.css";

const NewsSection = (props) => {
  return (
    <section className="news">
      <h2>BREAKING NEWS!</h2>
      <i>An 8.5 earthquake has destroyed your properties.</i>
      <p className="result">Destroyed properties won’t earn $</p>
    </section>
  );
};

export default NewsSection;
