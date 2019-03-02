DROP DATABASE IF EXISTS bamazonCustomer_db;
CREATE DATABASE bamazonCustomer_db;

USE bamazonCustomer_db;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(50) NULL,
	department_name VARCHAR (50) NULL,
	price DECIMAL(8, 2),
	stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);
-- Mock data 
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("Prada tote", "tote bag", 950, 1000), 
("Gucci canvas tote", "tote bag", 2200, 1000),
("Fendi Peekaboo tote", "tote bag", 6500, 1000), 
("The Row crossbody", "crossbody", 2690, 550),
("Mansur Gavriel", "bucket bag", 395, 150),
("Chloé Marcie", "tote bag", 1990, 300),
("Givenchy mini", "bucket bag", 1590, 910),
("Saint Laurent", "bucket bag", 1290, 610),
("Proenza Schouler", "crossbody", 896, 615),
("Miu Miu Grace", "shoulder bag", 1490, 550);

SELECT * FROM products;