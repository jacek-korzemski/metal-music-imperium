import React from 'react';
import styled from 'styled-components';

const StyledTopMenu = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    gap: 15px;
    li {
      margin: 0;
      padding: 0;
      a {
        font-weight: 400;
        display: block;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        text-decoration: none;
        color: white;
        &:hover {
          color: red;
          border-bottom: 1px solid red;
        }
      }
    }
  }
`;

const TopMenu = ({ elements }) => {
  if (!elements) {
    return null;
  }

  return (
    <StyledTopMenu>
      <ul>
        {elements.map((elem, index) => (
          <li key={index}>
            <a href={elem.href}>{elem.name}</a>
          </li>
        ))}
      </ul>
    </StyledTopMenu>
  );
};

export default TopMenu;
