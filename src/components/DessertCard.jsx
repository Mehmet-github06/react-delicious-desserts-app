import React, { useState } from "react";
import Card from "react-bootstrap/Card";

const DessertCard = ({ desserts }) => {
  const { img, name, statistics } = desserts;

  const [showImage, setShowImage] = useState(true);
  return (
    <Card
      className="rounded-2 player-card"
      role="button"
      onClick={() => setShowImage(!showImage)}
    >
      {showImage ? (
        <Card.Img variant="top" src={img} className="player-logo" />
      ) : (
        <h3 className="text-h h4 m-auto p-2 "> 🍰 {statistics}</h3>
      )}

      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default DessertCard;
