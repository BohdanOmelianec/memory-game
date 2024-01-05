import { memo } from "react";
import "./cardItem.scss";

interface Props {
    imgSrc: string;
    turned: boolean;
}

const CardItem = ({ imgSrc, turned }: Props) => {
  return (
      <div data-src={imgSrc} className={`item ${turned ? 'turned' : ''}`}>
          <img className="side back" src={imgSrc} alt="" />
          <div className="side front"></div>
      </div>
  );
};

export default memo(CardItem);
