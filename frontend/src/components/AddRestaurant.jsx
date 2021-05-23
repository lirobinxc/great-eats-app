import React, { useState } from 'react';
import styled from 'styled-components';
import restaurantService from '../services/restaurantService';

/* ------------------------------------------------------ */
/*                         STYLES                         */
/* ------------------------------------------------------ */
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  input,
  select,
  button {
    padding: 0.5rem;
    min-width: 0;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: 300px;
    border: 1px solid black;
    border-radius: 3px;
    margin: 0.3rem 0.3rem;
  }
  input {
    ::placeholder {
      color: gray;
    }
  }

  button {
    flex-grow: 0;
    flex-shrink: 2;
    flex-basis: 200px;
  }
`;

/* ------------------------------------------------------ */
/*                        COMPONENT                       */
/* ------------------------------------------------------ */
const AddRestaurant = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('0');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData = await restaurantService.post(name, location, priceRange);
    console.log({ newData });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        aria-label="Restaurant name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="location"
        value={location}
        aria-label="Restaurant location"
        placeholder="Location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <select
        name="price_range"
        aria-label="Restaurant price range"
        defaultValue={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
      >
        <option value="0" disabled>
          Price Range
        </option>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
        <option value="4">$$$$</option>
        <option value="5">$$$$$</option>
      </select>
      <button>Add Restaurant</button>
    </StyledForm>
  );
};

export default AddRestaurant;
