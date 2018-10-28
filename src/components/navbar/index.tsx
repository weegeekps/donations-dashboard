import * as React from 'react';
import styled from 'styled-components';

import { Breakpoints, Colors } from '../../styles';
import NavLink from './NavLink';

import logo from '../../ExtraLife_white_nav.svg';

export interface INavBarLink {
  displayName: string;
  targetUrl: string;
}

export interface INavBarProps {
  className?: string; // Used by styled-components.
  links: INavBarLink[];
}

const NavImage = styled.img`
  height: 5rem;
  margin-top: 0.5rem;

  @media (min-width: ${Breakpoints.TABLET_WIDTH}) {
    margin-top: 0;
    margin-left: 1rem;
  }
`;

const NavLinks = styled.ul`
  margin: 1rem 0;
  padding: 0;

  @media (max-width: ${Breakpoints.TABLET_WIDTH}) {
    width: 100vw;
  }

  @media (min-width: ${Breakpoints.TABLET_WIDTH}) {
    margin-right: 1rem;
  }
`;

function NavBar(props: INavBarProps) {
  const { className, links } = props;

  return (
    <div className={className}>
      <NavImage src={logo} alt="Adam's Extra Life Donations" />
      <NavLinks>
        {links.map(l => (
          <NavLink href={l.targetUrl}>{l.displayName}</NavLink>
        ))}
      </NavLinks>
    </div>
  );
}

export default styled(NavBar)`
  color: ${Colors.WHITE};
  background-color: ${Colors.PRIMARY};
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: navbar;

  @media (min-width: ${Breakpoints.TABLET_WIDTH}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
