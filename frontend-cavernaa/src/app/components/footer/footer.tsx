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
  SocialBox,
  MediaTitle,
  GridLink,
  ClientSupportContainer,
  LinksContainer,
  SubTitle,
  PaymentCardGrid,
  PaymentContainer,
  LinkBox,
} from "./styles";

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
        <Title>Nossa Loja</Title>
        <GridLink>
          <SubTitle>Sobre Nós</SubTitle>
          <SubTitle>Contato</SubTitle>
          <SubTitle>Política de Privacidade</SubTitle>
          <SubTitle>Termos de Serviço</SubTitle>
        </GridLink>
      </UsefulLinks>

      <ClientSupportContainer>
        <Title>Suporte ao Cliente</Title>
        <LinksContainer>
          <LinkBox>
            <SubTitle>Devoluções e Extornos</SubTitle>
            <SubTitle>Rastreie seu Pedido</SubTitle>
            <SubTitle>Fretes</SubTitle>
            <SubTitle>Meio </SubTitle>
          </LinkBox>
        </LinksContainer>
      </ClientSupportContainer>

      <PaymentContainer>
        <Title>Meio de Pagamento</Title>
        <PaymentCardGrid>
          <Image
            src="/amex-svgrepo-com.svg"
            alt="Logo"
            width={125}
            height={52}
          />

          <Image
            src="/diners-club-international-svgrepo-com.svg"
            alt="Logo"
            width={125}
            height={52}
          />

          <Image
            src="/elo-svgrepo-com.svg"
            alt="Logo"
            width={125}
            height={52}
          />

          <Image
            src="/bitpay-svgrepo-com.svg"
            alt="Logo"
            width={125}
            height={52}
          />

          <Image
            src="/maestro-svgrepo-com.svg"
            alt="Logo"
            width={125}
            height={52}
          />

          <Image
            src="/paymill-svgrepo-com.svg"
            alt="Logo"
            width={125}
            height={52}
          />
          <Image
            src="/western-union-svgrepo-com.svg"
            alt="Logo"
            width={125}
            height={52}
          />
        </PaymentCardGrid>
      </PaymentContainer>

      <SocialMediaContainer>
        <Title>Nossas Redes Sociais</Title>
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
