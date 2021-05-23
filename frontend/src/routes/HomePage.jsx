import React, { useEffect } from 'react';
import styled from 'styled-components';
import AddRestaurant from '../components/AddRestaurant';

import NavLinks from '../components/NavLinks';
import RestaurantsTable from '../components/RestaurantsTable';
import Title from '../components/Title';

/* STYLES */
const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .skeleton {
    background: red;
    color: black;
  }
`;

const HomePage = () => {
  useEffect(() => {
    document.title = `Home | ${process.env.REACT_APP_SITE_TITLE}`;
  }, []);

  return (
    <StyledHomePage>
      <Title text={process.env.REACT_APP_SITE_TITLE} />
      <NavLinks />
      <AddRestaurant />
      <RestaurantsTable />
    </StyledHomePage>
  );
};

export default HomePage;
