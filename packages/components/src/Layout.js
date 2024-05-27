import React from 'react';
import styled from 'styled-components';
import '../css/style.css';

const StyledLayout = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'sidebar'
    'footer';
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const Header = styled.header`
  grid-area: header;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const Main = styled.main`
  grid-area: main;
  padding: 1rem;
`;

const Sidebar = styled.aside`
  grid-area: sidebar;
  background-color: #f4f4f4;
  padding: 1rem;
`;

const Footer = styled.footer`
  grid-area: footer;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const DefaultHeader = () => {
  return <>Default Header</>;
};

const DefaultSidebar = () => {
  return <>Default Sidebar</>;
};

const DefaultFooter = () => {
  return <>Default Footer</>;
};

const Layout = ({ children, header, sidebar, footer }) => {
  const HeaderContent = header || DefaultHeader;
  const SidebarContent = sidebar || DefaultSidebar;
  const FooterContent = footer || DefaultFooter;

  return (
    <StyledLayout>
      <Header>
        <div className="container">
          <HeaderContent />
        </div>
      </Header>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <Main>{children}</Main>
          </div>
          <div className="col-12 col-lg-4">
            <Sidebar>
              <SidebarContent />
            </Sidebar>
          </div>
        </div>
      </div>
      <Footer>
        <div className="container">
          <FooterContent />
        </div>
      </Footer>
    </StyledLayout>
  );
};

export default Layout;
