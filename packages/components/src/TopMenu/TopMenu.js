import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

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
            <Link href={elem.href}>{elem.name}</Link>
          </li>
        ))}
      </ul>
    </StyledTopMenu>
  );
};

export default TopMenu;
