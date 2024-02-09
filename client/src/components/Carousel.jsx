import { useState, useCallback } from "react";
import ItemCard from "./ItemCard";

const Carousel = ({ items }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = useCallback(() => {
    setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setStartIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  }, [items.length]);

  const endIndex = (startIndex + 5) % items.length;

  const visibleItems =
    startIndex <= endIndex
      ? items.slice(startIndex, endIndex)
      : [...items.slice(startIndex), ...items.slice(0, endIndex)];

  return (
    <div className="carousel p-2 rounded-lg flex justify-evenly">
      <button onClick={handlePrev}>
        <i className="fa-solid fa-chevron-left text-4xl"></i>
      </button>
      <div className="carousel-items flex gap-2 mx-auto">
        {visibleItems.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
      <button onClick={handleNext}>
        <i className="fa-solid fa-chevron-right text-4xl"></i>
      </button>
    </div>
  );
};

export default Carousel;
