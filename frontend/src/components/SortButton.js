import React from 'react';
import styled from 'styled-components';
import { setActiveSortButtonId } from '../redux/reducers/uiReducer';
import { ArrowSortedUp } from '@styled-icons/typicons';
import { ArrowSortedDown } from '@styled-icons/typicons';
import { useDispatch, useSelector } from 'react-redux';

const StyledSortButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  #${(props) => props.activeSortButtonId} {
    color: ${(props) => props.theme.link_hover};
  }
`;

const SortIncButton = styled(ArrowSortedUp)`
  color: ${(props) => props.theme.font2};
  height: 1.5rem;
  margin: 0 0.2rem;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.link_hover};
  }
  path {
    pointer-events: none;
  }
`;
const SortDecButton = styled(ArrowSortedDown)`
  color: ${(props) => props.theme.font2};
  height: 1.5rem;
  margin: 0 0.2rem;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.link_hover};
  }
  &#selected {
    color: ${(props) => props.theme.link_hover};
  }
  path {
    pointer-events: none;
  }
`;

const SortButton = ({ categoryName, handleSortInc, handleSortDec }) => {
  const dispatch = useDispatch();
  const activeSortButtonId = useSelector(
    (state) => state.ui.activeSortButtonId
  );

  function setAsSelected(e, func) {
    const id = e.target.id;
    dispatch(setActiveSortButtonId(id));
    func();
  }

  return (
    <StyledSortButtons activeSortButtonId={activeSortButtonId}>
      <SortIncButton
        id={`sort-inc-${categoryName}`}
        onClick={(e) => setAsSelected(e, handleSortInc)}
      />
      <SortDecButton
        id={`sort-dec-${categoryName}`}
        onClick={(e) => setAsSelected(e, handleSortDec)}
      />
    </StyledSortButtons>
  );
};

export default SortButton;
