import { styled } from "styled-components";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import Carousel from "../components/carousel/carousel";

export const MainContainer = styled.div`
  min-height: 200vh;
`;

const images: string[] = [
  "/bannerHome.png", 
  "/FreteGratis.png",    
  "/brands.png",   
  "/brands2.png", 
  "/VampiroBanner.png",
];

export const Main = () => {
  return (
    <>
      <MainContainer>
        <Carousel images={images} />        
      </MainContainer>
      <Footer>
        <></>
      </Footer>
    </>
  );
};
