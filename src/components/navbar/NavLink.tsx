import { darken } from 'polished';
import * as React from 'react';
import styled from 'styled-components';

import { Breakpoints, Colors } from 'src/styles';

interface INavLinkProps {
  children: any;
  href: string;
}

const InlineListItem = styled.li`
  display: inline-block;
  margin-right: 0.5rem;

  :last-of-type {
    margin-right: 0;
  }
`;

const NavAnchor = styled.a`
  display: flex;
  color: ${Colors.WHITE};
  background-color: ${Colors.SECONDARY};
  height: 3rem;
  padding: 0 1rem;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s ease;
  font-size: 0.8rem;

  :hover {
    background-color: ${darken(0.05, Colors.SECONDARY)};
  }

  @media (min-width: ${Breakpoints.FULL_WIDTH}) {
    height: 4rem;
    font-size: 1rem;
  }
`;

function NavLink(props: INavLinkProps) {
  const { children, href } = props;

  return (
    <InlineListItem>
      <NavAnchor href={href}>{children}</NavAnchor>
    </InlineListItem>
  );
}

export default NavLink;
