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
VALUES ("Prada tote", "tote bag", 950, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gucci canvas tote", "tote bag", 2200, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fendi Peekaboo tote", "tote bag", 6500, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Row crossbody", "crossbody", 2690, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mansur Gavriel", "bucket bag", 395, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chloé Marcie", "tote bag", 1990, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Givenchy mini", "bucket bag", 1590, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Saint Laurent", "bucket bag", 1290, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Proenza Schouler", "crossbody", 896, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Miu Miu Grace", "shoulder bag", 1490, 20);

SELECT * FROM products;