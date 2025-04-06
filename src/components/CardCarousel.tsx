import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import CityCard from "./CityCard";

interface City {
  id: number;
  imageURL: string;
  city: string;
  description: string;
}

interface CarouselProps {
  citiesData: City[];
  isSide: boolean;
  isGrid: boolean;
  haveBtn: boolean;
}

const CardCarousel: React.FC<CarouselProps> = ({
  citiesData,
  isSide,
  isGrid,
  haveBtn,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  // Determine if the left or right arrow should be disabled
  const isLeftDisabled = currentIndex === 0;
  const isRightDisabled = currentIndex + cardsToShow >= citiesData.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1200) {
        setCardsToShow(2);
      } else if (window.innerWidth < 1500) {
        setCardsToShow(3);
      } else {
        setCardsToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && !isLeftDisabled) {
        goToPrevious();
      } else if (event.key === "ArrowRight" && !isRightDisabled) {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isLeftDisabled, isRightDisabled]);

  const goToPrevious = () => {
    if (!isLeftDisabled) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToNext = () => {
    if (!isRightDisabled) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const getVisibleCards = () => {
    if (!citiesData.length) {
      // Return skeleton cards if data is not loaded
      let cards = [];
      for (let i = 0; i < cardsToShow; i++) {
        cards.push(
          <CityCard
            key={i}
            isLoading={true} // Pass isLoading prop
            isSide={isSide}
            id={i}
          />
        );
      }
      return cards;
    }

    let cards = [];
    for (let i = 0; i < cardsToShow; i++) {
      const index = currentIndex + i;
      if (index >= citiesData.length) break; // Stop if we exceed the array bounds

      const city = citiesData[index];
      cards.push(
        <CityCard
          key={index}
          imageURL={city.imageURL}
          city={city.city}
          description={city.description}
          id={city.id}
          isSide={isSide}
          haveBtn={haveBtn}
        />
      );
    }
    return cards;
  };

  return (
    <div className="flex flex-row items-center justify-between group">
      <button
        onClick={goToPrevious}
        disabled={isLeftDisabled}
        className={`invisible group-hover:visible transition-transform duration-200 p-2 ${
          isLeftDisabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:-translate-x-2 cursor-pointer"
        }`}
      >
        <ChevronLeft
          size={50}
          className="hover:border hover:border-gray-200 rounded-3xl"
        />
      </button>

      <div
        className={`${
          isGrid ? "grid grid-cols-2" : "flex"
        } rounded-lg w-full gap-3 py-5`}
      >
        {getVisibleCards()}
      </div>

      <button
        onClick={goToNext}
        disabled={isRightDisabled}
        className={`invisible group-hover:visible transition-transform duration-200 p-2  ${
          isRightDisabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:translate-x-2  cursor-pointer"
        }`}
      >
        <ChevronRight
          size={50}
          className="hover:border hover:border-gray-200 rounded-3xl"
        />
      </button>
    </div>
  );
};

export default CardCarousel;
