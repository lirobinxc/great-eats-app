import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* ------------------------------------------------------ */
/*                         STYLES                         */
/* ------------------------------------------------------ */
const StyledStarRating = styled.div``;

/* ------------------------------------------------------ */
/*                        COMPONENT                       */
/* ------------------------------------------------------ */
const StarRating = ({ ratings }) => {
  // Calculate average rating from array
  const avgRating = (
    ratings.reduce((acc, val) => acc + val) / ratings.length
  ).toFixed(2);

  console.log({ avgRating });

  return <StyledStarRating>{avgRating}</StyledStarRating>;
};

export default StarRating;

/* ------------------------------------------------------ */
/*                        PROPTYPES                       */
/* ------------------------------------------------------ */
StarRating.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.number).isRequired,
};
