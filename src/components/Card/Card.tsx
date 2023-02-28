import React from "react";
import Button from "../Button/Button";

import "./Card.css";

interface Friend {
  phrase: string;
  author: string;
}

interface Props {
  friend: Friend;
  changeFriend: () => void;
}

const Card = ({ friend, changeFriend }: Props) => {
  return (
    <section className="card">
       <div className="container-btn">
        <Button onClick={changeFriend} />
      </div>
      <h1 className="card__title">{friend.phrase}</h1>
      <p className="card__description">{friend.author}</p>
    </section>
  );
};

export default Card;
