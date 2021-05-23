import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* ------------------------------------------------------ */
/*                         STYLES                         */
/* ------------------------------------------------------ */
const StyledTableRow = styled.tr`
  text-align: center;
  background: ${({ theme }) => theme.back1};
  color: ${({ theme }) => theme.font1};
  a {
    padding: 0.6rem;
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.font1};
  }
  td {
    font-size: 1.4rem;
  }
  :nth-child(even) {
    background-color: ${({ theme }) => theme.back3};
  }
  &:hover {
    background: ${({ theme }) => theme.row_hover};
    cursor: pointer;
    a {
      color: ${({ theme }) => theme.font2};
    }
  }
  @media all and (max-width: 425px) {
    a {
      padding: 0.3rem;
    }
  }
`;

/* ------------------------------------------------------ */
/*                        COMPONENT                       */
/* ------------------------------------------------------ */
const RestaurantsTableItem = ({ restaurant }) => {
  function handleRowClick(e) {
    const tr = e.target.parentNode;
    const id = tr.id;
    console.log({ id });
  }

  return (
    <StyledTableRow id={restaurant.id} onClick={handleRowClick}>
      <td tabIndex="0">
        <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
      </td>
      <td>
        <Link to={`/restaurants/${restaurant.id}`}>{restaurant.location}</Link>
      </td>
      <td>
        <Link to={`/restaurants/${restaurant.id}`}>
          {restaurant.price_range}
        </Link>
      </td>
    </StyledTableRow>
  );
};

export default RestaurantsTableItem;

/* ------------------------------------------------------ */
/*                        PROPTYPES                       */
/* ------------------------------------------------------ */
RestaurantsTableItem.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    price_range: PropTypes.number,
  }),
};
