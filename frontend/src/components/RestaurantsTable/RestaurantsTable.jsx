import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import RestaurantsTableItem from './RestaurantsTableItem';
import SortButton from './SortButton';

import {
  sortRestaurantsByPriceRange,
  sortRestaurantsByName,
  sortRestaurantsByLocation,
} from '../../redux/reducers/restaurantsReducer';

/* ------------------------------------------------------ */
/*                         STYLES                         */
/* ------------------------------------------------------ */
const StyledTable = styled.table`
  width: 90%;
  margin: 2rem 0;
  thead {
    transition: all 0.4s ease-in-out;
    color: ${(props) => props.theme.font2};
    font-size: 1.4rem;
    background: ${(props) => props.theme.back2};

    th {
      padding: 0.6rem;
    }
  }

  @media all and (max-width: 425px) {
    width: 100vw;
    th,
    td {
      overflow: auto;
      font-size: 1rem;
      padding: 0rem;
    }
  }
`;

/* ------------------------------------------------------ */
/*                        COMPONENT                       */
/* ------------------------------------------------------ */
const RestaurantsTable = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector((state) => state.restaurants.data);
  const isLoading = useSelector((state) => state.restaurants.isLoading);
  console.log({ restaurants });
  console.log({ isLoading });

  const skeleton = (
    <tr>
      <td>
        <Skeleton height={'calc(1.4rem + 20px)'} width={'100%'} />
      </td>
      <td>
        <Skeleton height={'calc(1.4rem + 20px)'} width={'100%'} />
      </td>
      <td>
        <Skeleton height={'calc(1.4rem + 20px)'} width={'100%'} />
      </td>
    </tr>
  );

  function handleSortByName(sort) {
    dispatch(sortRestaurantsByName(sort));
  }

  function handleSortByLocation(sort) {
    dispatch(sortRestaurantsByLocation(sort));
  }

  function handleSortByPriceRange(sort) {
    dispatch(sortRestaurantsByPriceRange(sort));
  }

  return (
    <StyledTable>
      <thead>
        <tr>
          <th>
            Name{' '}
            <SortButton
              categoryName="name"
              handleSortInc={() => handleSortByName('inc')}
              handleSortDec={() => handleSortByName('dec')}
            />
          </th>
          <th>
            Location{' '}
            <SortButton
              categoryName="location"
              handleSortInc={() => handleSortByLocation('inc')}
              handleSortDec={() => handleSortByLocation('dec')}
            />
          </th>
          <th>
            Price Range{' '}
            <SortButton
              categoryName="price_range"
              handleSortInc={() => handleSortByPriceRange('inc')}
              handleSortDec={() => handleSortByPriceRange('dec')}
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {isLoading
          ? skeleton
          : restaurants &&
            restaurants.map((ele) => (
              <RestaurantsTableItem key={ele.id} restaurant={ele} />
            ))}
      </tbody>
    </StyledTable>
  );
};

export default RestaurantsTable;
