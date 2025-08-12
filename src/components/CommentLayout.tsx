import { useState, useEffect } from "react";
import UserComment from "./UserComment";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Comment = {
  name: string;
  iconImg: string;
  title: string;
  desc: string;
};

interface CommentLayoutProps {
  comments: Comment[];
}

export default function CommentLayout({ comments }: CommentLayoutProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Detect screen size and adjust items per page
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3); // Laptop/Desktop
      } else {
        setItemsPerPage(1); // Mobile/Tablet
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const nextSlide = () => {
    if (activeIndex < comments.length - itemsPerPage) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  // Get current visible comments
  const visibleComments = comments.slice(
    activeIndex,
    activeIndex + itemsPerPage
  );

  return (
    <div className="relative w-full flex flex-col items-center mt-10">
      {/* Carousel container */}
      <div className="flex w-full items-center gap-4">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          disabled={activeIndex === 0}
          className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200 disabled:opacity-50"
        >
          <ChevronLeft />
        </button>

        {/* Comments */}
        <div className="flex w-full justify-around gap-4 transition-transform duration-500 ">
          {visibleComments.map((c, index) => {
            const globalIndex = activeIndex + index;
            return (
              <div
                key={globalIndex}
                className={`transition-all duration-500 ${
                  globalIndex === activeIndex + Math.floor(itemsPerPage / 2)
                    ? "opacity-100 scale-100"
                    : "opacity-40 scale-90"
                }`}
              >
                <UserComment
                  name={c.name}
                  iconImg={
                    <img
                      src={c.iconImg}
                      alt={c.name}
                      className="w-full h-full object-cover"
                    />
                  }
                  title={c.title}
                  desc={c.desc}
                />
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          disabled={activeIndex >= comments.length - itemsPerPage}
          className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200 disabled:opacity-50"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
