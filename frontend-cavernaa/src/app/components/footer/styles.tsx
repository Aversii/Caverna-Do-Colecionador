import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  width: 100dvw;
  background-color: ${({ theme }) => theme.colors.bgTerciary};
  position: relative;
  bottom: 0;
  height: auto;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(4, 25%);
  grid-template-areas:
    "sponsor sponsor sponsor sponsor"
    "links payment media client";

  & > :first-child {
    width: 100dvw;
  }

  @media (max-width: 479px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "sponsor"
      "links"
      "client"
      "payment"
      "media";
    height: auto;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    grid-template-columns: 50%50%;
    grid-template-areas:
      "sponsor sponsor "
      "links  payment "
      "media  client ";
    height: auto;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    grid-template-rows: auto 1fr;
    grid-template-columns: repeat(3, 33%);
    grid-template-areas:
      "sponsor sponsor sponsor "
      "links client media"
      "payment payment payment ";
    height: auto;
  }
`;

export const SponsorshipGrid = styled.div`
  grid-area: sponsor;
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
    width: 60%;
  }

  @media (min-width: 481px) and (max-width: 720) {
    width: 60%;
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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-items: center;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "firstlink"
      "secondlink"
      "thirdlink"
      "fourthlink";
    height: 100%;
    place-items: center;
  }

  @media (min-width: 1280px) {
    width: 60%;
    align-items: start;
    justify-content: start;
    padding-top: 20px;
  }
`;

export const Teste = styled.div`
  display: flex;
  justify-content: center;
`;

export const UsefulLinks = styled.div`
  grid-area: links;
  display: flex;
  align-items: center;
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

  @media (min-width: 1280px) {
    justify-content: center;
    align-items: center;
    padding-top: 30px;
  }
  @media (min-width: 360px) and (max-width: 1280px) {
    padding-top: 30px;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.45rem;
  padding-top: 25px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  justify-content: center;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.bgPrimary};
  }
`;

export const SubTitle = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.15rem;
  margin-top: 12px;
  font-family: Arial, Helvetica, sans-serif;
  grid-area: firstlink;
  &:hover {
    color: ${({ theme }) => theme.colors.bgPrimary};
    text-decoration: underline;
  }
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

export const PaymentContainer = styled.div`
  width: 100%¨;
  grid-area: payment;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

export const ClientSupportContainer = styled.div`
  width: 100%;
  grid-area: client;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  @media (max-width: 1440px) {
    padding-top: 30px;
  }
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
    width: 100%;
    margin-bottom: 20px;
  }

  @media (min-width: 360px) and (max-width: 414px) {
    grid-template-columns: 33% 33% 33%;
    width: 80%;
    place-items: center;
    justify-items: center;
    padding-top: 10px;
  }

  @media (min-width: 415px) and (max-width: 480px) {
    grid-template-columns: 33% 33% 33%;
    gap: 10px;
    width: 100%;
  }

  @media (min-width: 416px) and (max-width: 767px) {
    grid-template-columns: 25% 25% 25%;
    gap: 10px;
    width: 75%;
  }

  @media (min-width: 768px) {
    grid-template-columns: 25% 25% 25% 25%;
    gap: 12px;
    width: 55%;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(10%, 1fr));
    width: 60%;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    width: 80%;
    column-gap: 10px;
    place-items: center;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 25%);
    gap: 18px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
`;

export const LinkBox = styled.div`
  padding-top: 20px;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;

  @media (max-width: 480px) {
    place-content: center;
    align-items: center;
  }
`;

export const SocialMediaContainer = styled.div`
  grid-area: media;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 30px;

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
  padding-bottom: 5px;

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
`;

export const MediaTitle = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 1.15rem;
  padding-top: 5px;
  padding-left: 30px;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    color: ${({ theme }) => theme.colors.bgPrimary};
    text-decoration: underline;
  }
`;
