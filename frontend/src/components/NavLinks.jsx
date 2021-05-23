import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ToggleThemeButton from './ToggleThemeButton';

/* ------------------------------------------------------ */
/*                         STYLES                         */
/* ------------------------------------------------------ */
const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 0.5rem;
  background: beige;
  text-decoration: none;
  margin-bottom: 2rem;
`;

/* ------------------------------------------------------ */
/*                        COMPONENT                       */
/* ------------------------------------------------------ */
const NavLinks = () => {
  const theme = useSelector((state) => state.ui.theme);
  console.log({ theme });

  return (
    <nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <ToggleThemeButton />
    </nav>
  );
};

export default NavLinks;
