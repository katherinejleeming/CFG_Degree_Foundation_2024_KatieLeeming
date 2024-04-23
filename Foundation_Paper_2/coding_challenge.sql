-- USE bookings;

-- Task 1: clean data
-- ALTER TABLE properties
-- ADD COLUMN price_without_currency DECIMAL(10, 2);

-- UPDATE properties
-- SET price_without_currency = CAST(REPLACE(price, '$', '') AS DECIMAL(10, 2));

-- SELECT * FROM properties;

-- Task 2: Top Earning Properties
-- SELECT 
--     p.property_name,
--     p.company_name,
--     p.price_without_currency AS price,
--     (p.price_without_currency * COUNT(r.property_id)) AS total_earning
-- FROM 
--     properties p
-- JOIN 
--     reviews r ON p.property_id = r.property_id
-- GROUP BY 
--     p.property_id
-- ORDER BY 
--     total_earning DESC
-- LIMIT 10;


-- Task 3: Family Friendly Properties
-- SELECT 
--     p.property_name,
--     p.city,
--     p.price_without_currency AS price,
--     p.company_name
-- FROM 
--     properties p
-- JOIN 
--     reviews r ON p.property_id = r.property_id
-- WHERE 
--     r.review_text LIKE '%family%';

-- Task 4: Most Expensive Property

-- CREATE PROCEDURE get_most_expensive_property(IN city_name VARCHAR(100))
-- BEGIN
--      SELECT * FROM properties;
-- END //
-- DELIMITER ;


-- Task 5: Lowest Rated Property
-- SELECT 
--     p.property_name,
--     p.city,
--     p.price_without_currency AS price,
--     p.company_name,
--     AVG(r.score) AS average_score
-- FROM 
--     properties p
-- JOIN 
--     reviews r ON p.property_id = r.property_id
-- GROUP BY 
--     p.property_id
-- ORDER BY 
--     average_score ASC
-- LIMIT 1;
