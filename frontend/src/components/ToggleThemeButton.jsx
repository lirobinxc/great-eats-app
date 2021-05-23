import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { toggleTheme } from '../redux/reducers/uiReducer';

/* ------------------------------------------------------ */
/*                         STYLES                         */
/* ------------------------------------------------------ */
const StyledButton = styled.button``;

/* ------------------------------------------------------ */
/*                        COMPONENT                       */
/* ------------------------------------------------------ */
const ToggleThemeButton = () => {
  const dispatch = useDispatch();

  const handleToggleTheme = (e) => {
    e.preventDefault();
    dispatch(toggleTheme());
  };

  return <StyledButton onClick={handleToggleTheme}>Toggle Theme</StyledButton>;
};

export default ToggleThemeButton;
