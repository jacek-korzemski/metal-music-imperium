import styled from 'styled-components';

const StyledLogoText = styled.span`
  font-family: 'Metal Mania', system-ui;
  font-weight: 400;
  display: block;
  font-size: 40px;
  color: white;
`;

const LogoText = () => {
  return <StyledLogoText>MetalMusic.pl</StyledLogoText>;
};

export default LogoText;
