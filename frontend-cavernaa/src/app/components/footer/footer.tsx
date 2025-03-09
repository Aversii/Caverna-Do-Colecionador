import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  SponsorshipGrid,
  UsefulLinks,
  SocialMediaContainer,
  Title,
  SponsorContainer,
  SubTitle,
  SocialBox,
  MediaTitle,
  LeftSubTitle,
  FourthSubTitle,
  ThirdSubTitle,
  GridLink,
  LinkTitle,
  Teste,
  ClientSupportContainer,
  LinksContainer,
  LeftLinkBox,
  RightLinkBox,
  ClientTitle,
  ClientSubTitle,
  PaymentCardGrid,
} from "./styles";
import { PaymentIcon } from "react-svg-credit-card-payment-icons";

interface FooterProps {
  children: React.ReactNode;
}

export const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <FooterContainer>
      <SponsorContainer>
        <Title>Parceiros</Title>
        <SponsorshipGrid>
          <Image
            src="/panini-comics.svg"
            alt="Panini Comics"
            width={100}
            height={55}
          />
          <Image
            src="/ra-ma-editorial.svg"
            alt="Ra-Ma Editorial"
            width={100}
            height={55}
          />
          <Image
            src="/panini-comics.svg"
            alt="Panini Comics"
            width={100}
            height={55}
          />
          <Image
            src="/ra-ma-editorial.svg"
            alt="Ra-Ma Editorial"
            width={100}
            height={55}
          />
          <Image
            src="/panini-comics.svg"
            alt="Panini Comics"
            width={100}
            height={55}
          />
          <Image
            src="/ra-ma-editorial.svg"
            alt="Ra-Ma Editorial"
            width={100}
            height={55}
          />
        </SponsorshipGrid>
      </SponsorContainer>

      <UsefulLinks>
        <ClientTitle>Nossa Loja</ClientTitle>
        <GridLink>
          <ClientSubTitle>Sobre Nós</ClientSubTitle>

          <LeftSubTitle>Contato</LeftSubTitle>
          <ThirdSubTitle>Política de Privacidade</ThirdSubTitle>
          <FourthSubTitle>Termos de Serviço</FourthSubTitle>
        </GridLink>
      </UsefulLinks>

      <ClientSupportContainer>
        <ClientTitle>Suporte ao Cliente</ClientTitle>
        <LinksContainer>
          <LeftLinkBox>
            <ClientSubTitle>Devoluções e Extornos</ClientSubTitle>
            <ClientSubTitle>Rastreie seu Pedido</ClientSubTitle>
            <ClientSubTitle>Fretes</ClientSubTitle>
            <ClientSubTitle>Meio </ClientSubTitle>
          </LeftLinkBox>
          <RightLinkBox>
            <SubTitle>Meio de Pagamento</SubTitle>
            <PaymentCardGrid>
              <PaymentIcon type="Visa" format="mono" width={55} />
              <PaymentIcon type="Amex" format="mono" width={55} />
              <PaymentIcon type="Diners" format="mono" width={55} />
              <PaymentIcon type="Discover" format="mono" width={55} />
              <PaymentIcon type="Unionpay" format="mono" width={55} />
              <PaymentIcon type="Hipercard" format="mono" width={55} />
              <PaymentIcon type="Mastercard" format="mono" width={55} />
              <PaymentIcon type="Paypal" format="mono" width={55} />
            </PaymentCardGrid>
          </RightLinkBox>
        </LinksContainer>
      </ClientSupportContainer>

      <SocialMediaContainer>
        <ClientTitle>Nossas Redes Sociais</ClientTitle>
        <SocialBox>
          <FaFacebook size={33} color={"#1877F2"} />
          <MediaTitle>Facebook</MediaTitle>
        </SocialBox>
        <SocialBox>
          <FaInstagram size={33} color={"#C13584"} />
          <MediaTitle>Instagram</MediaTitle>
        </SocialBox>
        <SocialBox>
          <FaTwitter size={33} color={"#1DA1F2"} />
          <MediaTitle>Twitter</MediaTitle>
        </SocialBox>
        <SocialBox>
          <FaLinkedin size={33} color={"#0e76a8"} />
          <MediaTitle>LinkedIn</MediaTitle>
        </SocialBox>
        <SocialBox>
          <FaYoutube size={33} color={"#282828"} />
          <MediaTitle>YouTube</MediaTitle>
        </SocialBox>
      </SocialMediaContainer>
    </FooterContainer>
  );
};
