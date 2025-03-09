import { styled } from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 900px;
  height: auto;
  margin: auto;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const CarouselWrapper = styled.div<{ index: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => `translateX(-${props.index * 100}%)`};
`;

export const Slide = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  transition: 0.3s;

  &:hover {
    background: rgba(206, 39, 39, 0.8);
  }

  @media (max-width: 480px) {
    padding: 6px;
  }
`;

export const PrevButton = styled(Button)`
  left: 10px;

  &:hover > * {
    color: rgba(0, 0, 0, 0.8);
  }
`;

export const NextButton = styled(Button)`
  right: 10px;

  &:hover > * {
    color: rgba(0, 0, 0, 0.8);
  }
`;
