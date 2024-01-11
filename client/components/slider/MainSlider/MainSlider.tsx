import React, { useEffect, useState } from "react";
import { sleep } from "@/helpers/sleep";

const SLIDER_CHANGE_INTERVAL_MILLISECONDS = 5000;
const TIME_TO_SLEEP_MILLISECONDS = 500;

const sliderContent = [
  {
    id: 1,
    heading: "choose your shoes with us.",
    text: "We will help you to choose the product that without the doubt suits you best. And we mean it",
    image: "/assets/img/main/slider_1.png",
  },

  {
    id: 2,
    heading: "choose your shoes with us.",
    text: "We will help you to choose the product that without the doubt suits you best. And we mean it",
    image: "/assets/img/main/slider_2.png",
  },

  {
    id: 3,
    heading: "choose your shoes with us.",
    text: "We will help you to choose the product that without the doubt suits you best. And we mean it",
    image: "/assets/img/main/slider_3.png",
  },

  {
    id: 4,
    heading: "choose your shoes with us.",
    text: "We will help you to choose the product that without the doubt suits you best. And we mean it",
    image: "/assets/img/main/slider_4.png",
  },
  {
    id: 5,
    heading: "choose your shoes with us.",
    text: "We will help you to choose the product that without the doubt suits you best. And we mean it",
    image: "/assets/img/main/slider_5.png",
  },
];

export function MainSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentSlideData, setCurrentSlideData] = useState(sliderContent[0]);
  const [isSliderItemActive, setIsSliderItemActive] = useState<boolean>(false);

  useEffect(() => {
    const timeoutForChangingSlideDataToNextSlideData = setInterval(() => {
      const isLastSlide = currentIndex === sliderContent.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setCurrentSlideData(sliderContent[newIndex]);
      setIsSliderItemActive(false);
    }, SLIDER_CHANGE_INTERVAL_MILLISECONDS);

    const timeoutForSettingSliderItemToBeActive = setTimeout(() => {
      setIsSliderItemActive(true);
    }, TIME_TO_SLEEP_MILLISECONDS);

    return () => {
      clearInterval(timeoutForChangingSlideDataToNextSlideData);
      clearTimeout(timeoutForSettingSliderItemToBeActive);
    };
  }, [currentIndex]);

  const goToPrevious = async () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderContent.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setCurrentSlideData(sliderContent[newIndex]);
    setIsSliderItemActive(false);
    await sleep(TIME_TO_SLEEP_MILLISECONDS);
    setIsSliderItemActive(true);
  };

  const goToNext = async () => {
    const isLastSlide = currentIndex === sliderContent.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setCurrentSlideData(sliderContent[newIndex]);
    setIsSliderItemActive(false);
    await sleep(TIME_TO_SLEEP_MILLISECONDS);
    setIsSliderItemActive(true);
  };

  const goToSlide = async (indexToGoTo: number) => {
    setCurrentIndex(indexToGoTo);
    setCurrentSlideData(sliderContent[indexToGoTo]);
    setIsSliderItemActive(false);
    await sleep(TIME_TO_SLEEP_MILLISECONDS);
    setIsSliderItemActive(true);
  };

  return (
    <>
      <div className="main__slider">
        <button
          className="main__slider-btn main__slider-btn--left btn btn--grey-transparent"
          onClick={goToPrevious}
        >
          <img src="/assets/img/main/left.png" alt="Left arrow" />
        </button>
        <div
          className={`main__slider-content ${
            isSliderItemActive ? "active" : ""
          }`}
        >
          <div className="main__slider-texts">
            <h1 className="main__slider-heading">{currentSlideData.heading}</h1>
            <p className="main__slider-text">{currentSlideData.text}</p>
            <button className="main__slider-btn-main btn btn--grey">
              Read More
            </button>
          </div>

          <div className="main__slider-picture">
            <img
              src={currentSlideData.image}
              alt="Shoes"
              className="main__slider-img"
            />
          </div>
        </div>
        <button
          className="main__slider-btn main__slider-btn--right btn btn--grey-transparent"
          onClick={goToNext}
        >
          <img src="/assets/img/main/right.png" alt="Right arrow" />
        </button>
      </div>

      <div className="main__slider-controls">
        {sliderContent.map((slide, slideIndex) => {
          return (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`main__slider-control btn--slider ${
                slideIndex === currentIndex ? "active" : ""
              }`}
            ></button>
          );
        })}
      </div>
    </>
  );
}
