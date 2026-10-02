SELECT * FROM product WHERE price > 20

-- SQL Filtering and Aggregation

-- SELECT: The SELECT clause specifies the columns to be retrieved from the database. In this case, it retrieves all columns from the "product" table.
-- FROM: The FROM clause specifies the table from which to retrieve the data. Here, it indicates that the data should be retrieved from the "product" table.
-- WHERE: The WHERE clause is used to filter records based on specified conditions. In this query, it filters the products to include only those with a price greater than 20


-- SQL Data Types:
-- - Numeric data types 
--     - INT: Used for whole numbers (e.g., 1, 2, 3).
--     - DECIMAL: Used for fixed-point numbers (e.g., 10.99).
--     - FLOAT: Used for floating-point numbers (e.g., 3.14).

-- - Sring data types
--     - VARCHAR: Used for variable-length strings (e.g., 'Hello').
--     - CHAR: Used for fixed-length strings (e.g., 'A').

-- - Date and Time data types
--     - DATE: Used for date values (e.g., '2024-06-01').
--     - DATETIME: Used for date and time values (e.g., '2024-06-01 12:30:00').
--     - TIMESTAMP: Used for timestamp values (e.g., '2024-06-01 12:30:00').

-- - Unicode character data types
--     - NCHAR: Used for fixed-length Unicode strings (e.g., N'Hello').
--     - NVARCHAR: Used for variable-length Unicode strings (e.g., N'Hello World').

-- - Binary data types
--     - BINARY: Used for fixed-length binary data (e.g., 0x1234).
--     - VARBINARY: Used for variable-length binary data (e.g., 0x12345678).

-- - Miscellaneous data types
--     - BOOLEAN: Used for true/false values (e.g., TRUE, FALSE).
--     - JSON: Used for storing JSON formatted data (e.g., '{"key": "value"}').
--     - XML: Used for storing XML formatted data (e.g., '<root><element>value</element></root>').


-- To filter products with a price less than 30 and manufactured by 'Acme Corp':
SELECT * FROM product WHERE price < 30 AND manufacturer = 'Acme Corp';


-- Aggregation

-- SQL aggregation functions are used to perform calculations on a set of values and return a single value. Common aggregation functions include:
-- - COUNT(): Returns the number of rows that match a specified condition.
-- - SUM(): Returns the total sum of a numeric column.
-- - AVG(): Returns the average value of a numeric column.
-- - MAX(): Returns the maximum value of a column.
-- - MIN(): Returns the minimum value of a column.

-- To count the number of rows in the "product" table:
SELECT COUNT(*) FROM product;

-- To get the average price of products in the "product" table that are manufactured by 'Acme Corp':
SELECT AVG(price) FROM product WHERE manufacturer = 'Acme Corp';

-- To get the number of products per manufacturer.
SELECT COUNT (*) AS product_count, manufacturer FROM product GROUP BY manufacturer;

-- Remember to always include the column following the GROUP BY clause in the SELECT statement to avoid errors.

-- GROUP BY clause:
-- Remember to include the column following the GROUP BY clause in the SELECT statement to avoid errors.
-- Remeber to exclude from the SELECT clause any columns that are neither in the GROUP BY clause nor used in an aggregate function.


-- Creating a new table 

CREATE TABLE product (
    product_id INT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(5, 2) NOT NULL,
    manufacturer TEXT NOT NULL,
    );

    -- This is the general syntax for creating a table in SQL.

    CREATE TABLE table_name (
        column1_name datatype [optional_parameters],
        column2_name datatype [optional_parameters],
        ...
        columnN_name datatype [optional_parameters],
        PRIMARY KEY (columnX_name)
    );

    -- Altering a table

    ALTER TABLE table_name
    ADD serial_number INT;

    ALTER COLUMN serial_number TEXT;

    -- Dropping a table

    DROP TABLE table_name;
    DROP TABLE product;

    -- DROP TABLE command deletes the table and all its data.


-- Adding data to a table 

-- INSERT INTO command helps you add data into tables.

-- Here's the general syntax for inserting data into a table:

INSERT INTO table_name (columnn1, column2, ..., columnN)
VALUES (value1, value2, ..., valueN), (value1, value2, ..., valueN);


INSERT INTO product (product_id, name, description, price, manufacturer)
VALUES (
    1,
    'Widget A',
    'A high-quality widget for various applications.',
    25.99,
    'Acme Corp'
),
(
    2,
    'Widget B',
    'A budget-friendly widget suitable for everyday use.',
    15.49,
    'Budget Widgets Inc.'
);

-- Deleting data from a table
DELETE FROM table_name WHERE condition;

DELETE FROM product WHERE product_id = 2;

-- DELETE FROM command deletes all the rows without a filtering condition.

-- Updating data in a table
UPDATE table_name
SET column1 = value1, 
    column2 = value2,....
WHERE condition;

UPDATE product
SET price = 29.99,
    description = 'An updated description for Widget A.'
WHERE product_id = 2;

-- UPDATE....SET.... command updates every row without a filtering condition.


-- Foreign Key Constraints

-- Creating two related tables 

CREATE TABLE product (
    product_id INT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(5, 2) NOT NULL,
    manufacturer TEXT NOT NULL
);

CREATE TABLE review (
    review_id INT PRIMARY KEY,
    product_id INT,
    review_text INT NOT NULL,
    datetime DATETIME NOT NULL,
    DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_product_review
        FOREIGN KEY (product_id) REFERENCES product(product_id)
);

-- Here's the general syntax for creating a foreign key constraint in SQL:

CREATE TABLE child_table_name (
    column1 datatype1 [NOT NULL],
    column2 datatype2 [NOT NULL],
    ...,
    foreign_key_column datatype,
    CONSTRAINT fk_parent_child
        FOREIGN KEY (foreign_key_column) REFERENCES parent_table_name(parent_table_primary_key_column)
)


-- JOIN data from two related tables

-- Uses the JOIN...ON clause to join data from two tables

SELECT name, review_text 
FROM product 
JOIN review 
ON product.product_id = review.product_id;

-- here's the general syntax 

SELECT column1, column 2
FROM table1
JOIN table2
ON table1.column = table2.column;

-- You can also use the AS clause to rename the result in the concacted table 

SELECT employee.name AS employee_name 
FROM employee 
JOIN department 
ON employee.department_id = department.id;


-- Another type of JOINS
-- 1. INNER JOIN - just the matching rows 
-- 2. LEFT JOIN - All the left rows then the matching ones with the right as well
-- 3. RIGHT JOIN - All the right rows then the matching ones with the left 
-- 4. FULL OUTER JOIN - All the rows in both tables including the non matching rows

-- These methods can lead to Null and you have to be careful how you handle null values

-- You can use the WHERE clause to join two related tables.



-- Goals of database design
-- 1. data consistency 
-- 2. maintainabilty and ease of use 
-- 3. data security
-- 4. scalability and flexibility 


-- Database design lifecycle 
-- 1. Requirement gathering
-- 2. Analysis and design
    -- Identify the goals of the database 
    -- Identify subjects, characteristics and relationships 
    -- Data modeling
    -- Normalization - breaking down a table to smaller tables
-- 3. Implementation/integrationand testing
    -- Functionality
    -- Performance
    -- Security

-- How to turn Real-World ideas into DataBase tables 

-- Identidy subjects (they can turn into tables in the DB)
-- Identify charcteristics(they can turn into columns in the DB)

-- Entities and Attributes 
-- An entity is an object or concept that can be described by many attributes 
-- Entity(A conceptual idea) is implemented as  table 
-- Table (A conceptual idea) is implemented as column

-- Naming convention 
-- Snake case: first_name
-- Camel case: firstName
-- Pascal case: FirstName 
-- Upper case: FIRST_NAME


-- How to pick the right primary key 
--  A primary key refers to one or more attributes that can be used to identify an individual row

-- How to pick the primary key for a table 

-- 1. Pick the best candidate key as the primary key
--    A candidate key is the smallest possible combination of attributes that can uniquely identify a row in a table 
-- 
-- 2. create new attribute to serve as the primary key 

-- Use these criteria to pick a primary key 

-- The primary key has to be:

-- 1. unique 
-- 2. non-empty(null)
-- 3. stable
-- 4. simple
-- 5. short
-- 6. familiar
-- 7. prevents redundancy 

-- String data types

-- * CHAR: Stores character strings of a fixed length

CHAR(2) - 2 Bytes (2 characters)

-- Strings of uniform length
-- Country codes (US, CA, UK)
-- Currency code(USD, EUR, NGA)
-- Airport codes (LAX, JFK, LHR)
-- Lnaguage Codes (EN, FR ES)


-- *VARCHAR: Stores Variable-length character strings with a known length.

VARCHAR(30) - Maximum Length for the column
-- Rule of Thumb 
-- Under 255 characters: Almost always VARCHAR
-- 255-1,000 Charcters : Usually still VARCHAR unless you expect significant growth

--Name, email address, 

-- *Text: Stores character strings of virtually unlimited length.
TEXT

comments, articles, etc


-- Numeric data types 



-- Whole numbers 
-- Space efficient and easy to compare but can't represent anything with a decimal 

TINYINT --Signed(-128 to 127) --Unsigned(0 to 255)
SMALLINT --Signed(-32,768 to 32, 767) --Unsigned(0 to 65, 535)
INT --Signed(-2,147,483,648 to 2,147,483,647(~2 billion)) --Unsigned(0 to 4,294,967,295(~4 billion))
BIGINT --Signed(-2^63 to 2^63-1) --Unsigned(0 to 2^64)

-- IDs, counts, ages, or any values that can't be farctional


-- Floating point numbers 
-- Decimals that can tolerate some level of approximation
-- Precision is the number of digits in a decimal
-- Scale is the number of digits after the decimal point.

FLOAT --32 bit, has about 7 significant digits of precision.
DOUBLE -- 64 bit, as about 15 - 17 siginificant digits of precision.

-- Fixed poimt numbers 
-- Exact decimals for precise values that require full accuracy
DECIMAL(6,4)
NUMERIC(6,4)






