import { Dispatch, SetStateAction, useEffect, useState } from "react";
import useImages from "../useImages";
import CardItem from "../card-item/CardItem";
import "./cards.scss";

interface Props {
  size: number;
  setIsFinished: Dispatch<SetStateAction<boolean>>;
}

const Cards = ({ size, setIsFinished }: Props) => {
  const { suffledImages: images } = useImages(size);
  const [turnedCards, setTurnedCards] = useState<number[]>([]);
  const [quessedCards, setQuessedCards] = useState<number[]>([]);
  const [checking, setChecking] = useState(false);

  const clickHandler = (index: number) => {
    if (checking || turnedCards.includes(index)) return;

    setTurnedCards((turned) => [...turned, index]);
  };

  useEffect(() => {
    if (turnedCards.length && turnedCards.length === 2) {
      setChecking(true);

      const [firstCard, secondCard] = turnedCards;

      if (images[firstCard] === images[secondCard]) {
        setQuessedCards((quessed) => [...quessed, ...turnedCards]);
        setTurnedCards([]);
        setChecking(false);
      } else {
        setTimeout(() => {
          setTurnedCards([]);
          setChecking(false);
        }, 900);
      }
    }
  }, [turnedCards, images]);

   useEffect(() => {
      if (quessedCards.length && quessedCards.length === images.length) {
        setTimeout(() => {
          setIsFinished(true);
        }, 800);
      }
   }, [quessedCards, images.length, setIsFinished]);

  const playgroundStyles = {
    gridTemplateColumns: `repeat(${size}, 80px)`,
    gridTemplateRows: `repeat(${size}, 80px)`,
  };

  if (!images.length) {
    return null;
  }

  return (
    <div className="playground" style={playgroundStyles}>
      {images.map((img, index) => (
        <div key={`${img}${index}`} onClick={() => clickHandler(index)}>
          <CardItem
            imgSrc={img}
            turned={turnedCards.includes(index) || quessedCards.includes(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Cards;
