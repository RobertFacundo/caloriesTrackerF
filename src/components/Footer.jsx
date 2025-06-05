import styled from "styled-components";

const FooterContainer = styled.footer`
  width:100%;
  text-align: center;
  font-size: 1rem;
  color: ${({theme})=> theme.text};
  max-height: 5rem;
  position:fixed;
  bottom: 0;
  left:0;
  z-index:1000;
  transition: color 0.3s ease;
  letter-spacing: 0.1rem;

  &:hover{
    color: ;
  }
`;

const GitHubLink = styled.a`
  color: ${({theme})=> theme.primary};
  text-decoration: none;
  font-weight: 800;
  transition: color 0.8s ease;
  letter-spacing: 0.1rem;

  &:hover{
    color: ${({theme})=> theme.primary};
  }
`;

const Footer = () => {
    return (
    <FooterContainer>
        Designed and developed by <GitHubLink href="https://github.com/RobertFacundo" target="_blank" rel="noopener noreferrer">Robert</GitHubLink>
    </FooterContainer>
 )
};

export default Footer;