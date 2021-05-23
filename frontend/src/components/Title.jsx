import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-family: 'Pattaya', serif;
  font-size: 4rem;
  text-align: center;
  color: ${(props) => props.theme.title};

  &.glow {
    color: ${({ theme }) => theme.title};
    transition: ease-in-out 0.4s;
    text-shadow: 0 0 5px #caf0f8;
  }
`;

const Title = ({ text }) => {
  const isDarkTheme = useSelector((state) => state.ui.theme);
  const [glowCSS, setGlowCSS] = useState(null);

  useEffect(() => {
    setGlowCSS(isDarkTheme === 'dark' ? 'glow' : null);
  }, [isDarkTheme]);

  return <StyledTitle className={glowCSS}>{text}</StyledTitle>;
};

export default Title;
