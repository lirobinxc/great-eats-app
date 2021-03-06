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
const StarRating = ({ rating }) => {
  return <StyledStarRating>{rating}</StyledStarRating>;
};

export default StarRating;

/* ------------------------------------------------------ */
/*                        PROPTYPES                       */
/* ------------------------------------------------------ */
StarRating.propTypes = {
  ratings: PropTypes.number,
};
