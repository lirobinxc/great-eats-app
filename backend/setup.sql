CREATE TABLE restaurants (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  		-- BIGSERIAL automatically inserts a serialized number	  
		  -- NOT NULL ensures this field MUST have a value	
  		-- PRIMARY KEY exists in every table and uniquely identifies each entry (can be any unique field)
  name VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL,
  price_range INT NOT NULL CHECK(price_range >= 1 AND price_range <= 5)
);


INSERT INTO 
  restaurants (name, location, price_range)
VALUES 
  ('Burger King', 'Las Vegas', 1),
  ('Wendys', 'York', 1),
  ('Garlics', 'London', 4),
  ('Crabby Joes', 'Toronto', 2),
  ('Boston Pizza', 'New York', 3)
  ;


-- SETUP reviews TABLE

CREATE TABLE reviews (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  restaurant_id BIGINT NOT NULL REFERENCES restaurants(id),
  name VARCHAR(50) NOT NULL,
  review TEXT NOT NULL,
  rating INT CHECK(rating >=1 AND rating <= 5)
);

INSERT INTO reviews (restaurant_id, name, review, rating)
VALUES
  (3, 'Mia', 'We received the flyers in the mail today and decided to check this place.', 4)
  (4, 'Lily', 'One of the best eats in our area.  The food is amazing and staff are friendly.  Portions are very satisfying and priced right.  Busy at prime times, but that’s a good thing.  Food is fresh!  Keep up the great work :)', 5)
  (5, 'Joseph', 'Good garlic sauce and the beef and chicken both were juicy but crunchy.', 3)
  ;