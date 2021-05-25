import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/* ------------------------------------------------------ */
/*                         STYLES                         */
/* ------------------------------------------------------ */
const StyledReviewCard = styled.div``;

/* ------------------------------------------------------ */
/*                        COMPONENT                       */
/* ------------------------------------------------------ */
const ReviewCard = ({ reviewInfo }) => {
  return <StyledReviewCard></StyledReviewCard>;
};

export default ReviewCard;

/* ------------------------------------------------------ */
/*                        PROPTYPES                       */
/* ------------------------------------------------------ */
ReviewCard.propTypes = {
  reviewInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    restaurant_id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  }),
};
