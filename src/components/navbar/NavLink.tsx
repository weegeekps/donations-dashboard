import { darken } from 'polished';
import * as React from 'react';
import styled from 'styled-components';

import { Breakpoints, Colors } from 'src/styles';

interface INavLinkProps {
  children: any;
  href: string;
}

const InlineListItem = styled.li`
  display: block;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 0.5rem;

  :last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: ${Breakpoints.TABLET_WIDTH}) {
    display: inline-block;
    margin-left: 0;
    margin-right: 0.5rem;
    margin-bottom: 0;

    :last-of-type {
      margin-right: 0;
    }
  }
`;

const NavAnchor = styled.a`
  display: flex;
  color: ${Colors.WHITE};
  background-color: ${Colors.SECONDARY};
  font-size: 1rem;
  text-decoration: none;
  height: 3rem;
  padding: 0 1rem;
  align-items: center;
  justify-content: center;
  transition: background-color 0.5s ease;

  :hover {
    background-color: ${darken(0.05, Colors.SECONDARY)};
  }

  @media (min-width: ${Breakpoints.TABLET_WIDTH}) {
    height: 4rem;
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
