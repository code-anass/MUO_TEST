import CarousalItem from "./CarousalItem";
import "./Carousal.css";
import { useEffect, useState, Fragment } from "react";
const Slider = (props) => {
  /**
   * Props
   */
  const { card } = props;


  const [activeIndex, setActiveIndex] = useState(0);

  
  const [isSwipingPaused, setIsSwipingPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = card.length - 1;
    } else if (newIndex >= card.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSwipingPaused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      className="carousal"
      onMouseEnter={() => setIsSwipingPaused(true)}
      onMouseLeave={() => setIsSwipingPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {card.map((child, index) => (
          <Fragment key={child.id + 1}>
            <CarousalItem item={child} width="100%"></CarousalItem>
          </Fragment>
        ))}
      </div>
      <div className="indicators">
        <button
          className="prev-button"
          onClick={(e) => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        {<p>{activeIndex}</p>}
        <button
          className="next-button"
          onClick={(e) => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Slider;
