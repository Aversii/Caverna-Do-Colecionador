import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  width: 100dvw;
  background-color: ${({ theme }) => theme.colors.bgTerciary};
  position: relative;
  bottom: 0;
  height: 80vh;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 33% 33% 33%;
  grid-template-areas:
    "header header header"
    "left mid right";

  & > :first-child {
    width: 100dvw;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "left"
      "right"
      "mid";
    height: auto;
  }

  @media (max-width: 720) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header" "left"
      "right" "mid";
    height: auto;

  }
  @media (min-width: 416px) and (max-width: 767px) {
      
    }
`;



export const SponsorshipGrid = styled.div`
  grid-area: header;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  width: 100dvw;
  margin-bottom: 30px;
  text-align: center;
  height: 100%;
  place-items: center;

  & img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 359px) {
    width: 75%;
  }

  @media (min-width: 360px) and (max-width: 414px) {
    width: 70%;
    gap: 25px;
  }

  @media (min-width: 415px) and (max-width: 480px) {
    width: 80%;
  }

  @media (min-width: 416px) and (max-width: 767px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1280px) {
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1920px) {
  }
`;

export const GridLink = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-areas:
    "firstlink"
    "secondlink"
    "thirdlink"
    "fourthlink";
  gap: 12px;
  place-items: center;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "firstlink"
      "secondlink"
      "thirdlink"
      "fourthlink";
    height: auto;
    place-items: center;
  }
`;

export const Teste = styled.div`
  display: flex;
  justify-content: center;
`;

export const UsefulLinks = styled.div`
  grid-area: right;
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  flex-direction: column;
  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }

  & > :first-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > :nth-child(2) {
    align-items: center;
    padding-top: 20px;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.55rem;
  text-decoration: underline;
`;

export const ClientTitle = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.55rem;
  padding-top: 25px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const LinkTitle = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.55rem;
  width: 50%;
  margin-bottom: 15px;
`;

export const ClientSubTitle = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.15rem;
  margin-top: 12px;
  font-family: Arial, Helvetica, sans-serif;
  grid-area: firstlink;
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.15rem;
  margin-top: 12px;
  font-family: Arial, Helvetica, sans-serif;
  grid-area: firstlink;

  @media (max-width: 480px) {
    font-size: 1.55rem;
  }
`;

export const LeftSubTitle = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.15rem;
  margin-top: 12px;
  font-family: Arial, Helvetica, sans-serif;
  grid-area: secondlink;
  @media (max-width: 480px) {
    display: grid;
    justify-self: center;
  }
`;

export const ThirdSubTitle = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.15rem;
  margin-top: 12px;
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
  grid-area: thirdlink;
`;

export const FourthSubTitle = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.15rem;
  margin-top: 12px;
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
  grid-area: fourthlink;
`;

export const SponsorContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-direction: column;
  align-items: center;

  & a {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 24px;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }
`;

export const ClientSupportContainer = styled.div`
  width: 100%;
  grid-area: mid;
  display: flex;
  flex-direction: column;
  place-content: center;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const PaymentCardGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 33% 33% 33%;
  margin-top: 25px;

  @media (max-width: 359px) {
    grid-template-columns: 33% 33% 33%;
    gap: 8px;
    place-items: center;
    width: 90%;
    margin-bottom: 20px;
  }

  @media (min-width: 360px) and (max-width: 414px) {
    grid-template-columns: 33% 33% 33%;
    gap: 10px;
    width: 60%;
  }

  @media (min-width: 415px) and (max-width: 480px) {
    grid-template-columns: 25% 25% 25% 25%;
    gap: 10px;
    width: 75%;
  }

  @media (min-width: 416px) and (max-width: 767px) {
    grid-template-columns: 25% 25% 25% 25%;
    gap: 10px;
    width: 75%;
  }

  @media (min-width: 768px) {
    grid-template-columns: 33% 33% 33%;
    gap: 12px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 25% 25% 25% 25%;
    gap: 15px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 25% 25% 25% 25%;
    width: 50%;
    column-gap: 10px;
    justify-content: center;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 25%);
    gap: 18px;
  }

  @media (min-width: 1920px) {
    grid-template-columns: repeat(5, 20%);
    gap: 20px;
  }
`;

export const LinksContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 50% 50%;
  @media (max-width: 480px) {
    grid-template-columns: 100%;

    place-content: center;
    align-items: center;
  }
`;

export const LeftLinkBox = styled.div`
  padding-top: 20px;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: 480px) {
    place-content: center;
    align-items: center;
  }
`;

export const RightLinkBox = styled.div`
  width: 150%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 480px) {
    place-content: center;
    align-items: center;
  }

  @media (max-width: 380px) {
    width: 100%;
  }
`;

export const SocialMediaContainer = styled.div`
  grid-area: left;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & a {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 24px;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }

  & > :not(:first-child) {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  > :first-child {
    padding-bottom: 25px;
  }
`;

export const SocialBox = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  padding-bottom: 12px;

  & > :first-child {
    display: flex;
    justify-content: end;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  & > :last-child {
    width: 100%;
    display: flex;
    justify-content: start;
  }

  @media (max-width: 380px) {
  }
`;

export const MediaTitle = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.15rem;
  padding-top: 5px;
  padding-left: 30px;
  font-family: Arial, Helvetica, sans-serif;
`;
