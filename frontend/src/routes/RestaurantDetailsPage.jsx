import React, { useEffect } from 'react';
import styled from 'styled-components';

import NavLinks from '../components/NavLinks';
import Title from '../components/Title';

/* ------------------------------------------------------ */
/*                         STYLES                         */
/* ------------------------------------------------------ */
const StyledRestaurantDetailsPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* ------------------------------------------------------ */
/*                        COMPONENT                       */
/* ------------------------------------------------------ */
const RestaurantDetailsPage = () => {
  useEffect(() => {
    document.title = `RestaurantDetails | ${process.env.REACT_APP_SITE_TITLE}`;
  }, []);

  return (
    <StyledRestaurantDetailsPage>
      <Title text={process.env.REACT_APP_SITE_TITLE} />
      <NavLinks />
    </StyledRestaurantDetailsPage>
  );
};

export default RestaurantDetailsPage;
