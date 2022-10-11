import Buton from "../buton/Buton";
// import "./Card.css";

import CardStyle from "./card.module.css";

const Card = ({ language, btn, img }) => {
  return (
    <div className="title">
      <h1>{language}</h1>
      <img className="images" src={img} alt="img" />
      <Buton btn={btn} />
    </div>
  );
};

export default Card;
