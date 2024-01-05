import { Dispatch, SetStateAction, ChangeEvent, useState } from "react";

import "./startWindow.scss";

interface Props {
  setSize: Dispatch<SetStateAction<number>>;
}
const StartWindow = ({ setSize }: Props) => {
  const [areaSize, setAreaSize] = useState(4);


  const sizeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setAreaSize(+e.target.value);

  const startGame = () => {
    setSize(areaSize)
  }

  return (
    <div className="start-container">
      <div className="start-box">
        <h1 className="title">Test Your Memory</h1>
        <h3 className="subtitle">Select the difficulty</h3>

        <div className="radio-buttons">
          <div>
            <input
              type="radio"
              name="size"
              id="value4x4"
              defaultChecked={areaSize === 4}
              value={4}
              onChange={sizeHandler}
            />
            <div className="radio"></div>
            <label htmlFor="value4x4">4x4</label>
          </div>

          <div>
            <input
              type="radio"
              name="size"
              id="value6x6"
              defaultChecked={areaSize === 6}
              value={6}
              onChange={sizeHandler}
            />
            <div className="radio"></div>
            <label htmlFor="value6x6">6x6</label>
          </div>
        </div>

        <button className="button" type="button" onClick={startGame}>Start Game</button>
      </div>
    </div>
  );
};

export default StartWindow;
