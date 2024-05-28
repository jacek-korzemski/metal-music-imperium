import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  min-height: 100vh;
`;

const Header = styled.header`
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
      <Main>
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
