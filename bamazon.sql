CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products (
ID int NOT NULL AUTO_INCREMENT,
Product varchar(50) NOT NULL,
Department varchar(50) NOT NULL,
Price DECIMAL(4,2) NOT NULL,
Stock int NOT NULL,
PRIMARY KEY (ID) 
);

INSERT INTO Products (Product, Department, Price, Stock) VALUES (
'Electric Razor',
'Bath',
29.99,
50);

INSERT INTO Products (Product, Department, Price, Stock) VALUES (
'Christmas Sweater',
'Clothing',
19.99,
67);

INSERT INTO Products (Product, Department, Price, Stock) VALUES (
'Yule Log',
'Festive',
14.99,
48);

INSERT INTO Products (Product, Department, Price, Stock) VALUES (
'The Grinch (VHS)',
'Obsolete',
59.99,
2);

INSERT INTO Products (Product, Department, Price, Stock) VALUES (
'Waffle Maker',
'Appliances',
49.99,
24);

INSERT INTO Products (Product, Department, Price, Stock) VALUES (
'HDMI Cable',
'Electronics',
4.99,
412);

INSERT INTO Products (Product, Department, Price, Stock) VALUES (
'Dog Bed',
'Pets',
29.99,
43);

INSERT INTO Products (Product, Department, Price, Stock) VALUES (
'Cat Bed',
'Pets',
19.99,
42);

INSERT INTO Products (Product, Department, Price, Stock) VALUES (
'Toothpaste',
'Bath',
5.00,
78);

INSERT INTO Products (Product, Department, Price, Stock) VALUES (
'Survival Towel',
'Hitchhiking',
78.98,
10);
