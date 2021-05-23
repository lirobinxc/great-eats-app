import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/reducers/uiReducer';

const ToggleThemeButton = () => {
  const dispatch = useDispatch();

  const handleToggleTheme = (e) => {
    e.preventDefault();
    dispatch(toggleTheme());
  };

  return <button onClick={handleToggleTheme}>Toggle Theme</button>;
};

export default ToggleThemeButton;
