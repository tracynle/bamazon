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
("Indoor Slippers", "shoes", 15, 1000), 
("Canvas tote bag", "handbags", 22, 1000),
("Marc Jacobs tote bag", "handbags", 650, 1000), 
("iPhone x phone case", "accessories", 26, 550),
("Bodum Coffee French Press", "kitchen ware", 39, 150),
("Knitted Scarf", "accessories", 40, 300),
("Midori Traveler's Notebook", "notebooks", 55, 910),
("Strasthmore Sketchbook", "art supplies", 15, 610),
("Study Desk", "furniture", 200, 615),
("Vitruvi Stone Diffuser", "diffuser", 115, 550);

SELECT * FROM products;