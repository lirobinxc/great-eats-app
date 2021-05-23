import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledStarRating = styled.div``;

const StarRating = ({ ratings }) => {
  const avgRating = (
    ratings.reduce((acc, val) => acc + val) / ratings.length
  ).toFixed(2);

  console.log({ avgRating });

  return <StyledStarRating>{avgRating}</StyledStarRating>;
};

export default StarRating;

StarRating.propTypes = {
  ratings: PropTypes.arrayOf(PropTypes.number),
};
