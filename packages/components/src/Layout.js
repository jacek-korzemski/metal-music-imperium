import React from 'react';
import styled from 'styled-components';
import TopMenu from './TopMenu';
import LogoText from './LogoText';
import { useDefaultMenu } from '@m-m-m/hooks';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  min-height: 100vh;
`;

const Header = styled.header`
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  background-color: black;
  color: #fff;
  padding: 1rem;
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 1rem;
`;

const Sidebar = styled.aside`
  background-color: #f4f4f4;
  padding: 1rem;
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const DefaultHeader = () => {
  const menuItems = useDefaultMenu();
  return (
    <>
      <LogoText />
      <TopMenu elements={menuItems} />
    </>
  );
};

const DefaultSidebar = () => {
  return <>Default Sidebar</>;
};

const DefaultFooter = () => {
  return <>Default Footer</>;
};

const DefaultHero = () => {
  return null;
};

const Layout = ({ children, header, sidebar, footer, hero }) => {
  const HeaderContent = header || DefaultHeader;
  const SidebarContent = sidebar || DefaultSidebar;
  const FooterContent = footer || DefaultFooter;
  const HeroContent = hero || DefaultHero;

  return (
    <StyledLayout>
      <Header>
        <div className="container">
          <HeaderContent />
        </div>
      </Header>
      <Main>
        <HeroContent />
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">{children}</div>
            <div className="col-12 col-lg-4">
              <Sidebar>
                <SidebarContent />
              </Sidebar>
            </div>
          </div>
        </div>
      </Main>
      <Footer>
        <div className="container">
          <FooterContent />
        </div>
      </Footer>
    </StyledLayout>
  );
};

export default Layout;
