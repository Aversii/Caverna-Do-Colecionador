import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image"; 
import { CarouselContainer, CarouselWrapper, NextButton, PrevButton, Slide } from "./styles";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState<number>(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <CarouselContainer>
      <CarouselWrapper index={index}>
        {images.map((img, i) => (
          <Slide key={i}>
            <Image
              src={img}
              alt={`Slide ${i}`}
              width={1000} 
              height={300}
              style={{ maxWidth: "100%", height: "auto" }} 
              priority
            />
          </Slide>
        ))}
      </CarouselWrapper>
      <PrevButton onClick={prevSlide}><FaChevronLeft /></PrevButton>
      <NextButton onClick={nextSlide}><FaChevronRight /></NextButton>
    </CarouselContainer>
  );
};

export default Carousel;
