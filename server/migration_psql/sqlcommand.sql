create database invoiceit ;

create table users (
	userid SERIAL PRIMARY KEY,
	passsword varchar (255),
	Role varchar (255),
	username varchar (255)
);

create table product (
	productid SERIAL PRIMARY KEY ,
	title varchar (255),
	qt number (15),
	priceunit varchar (255)
);

create table customer (
	customerid SERIAL PRIMARY KEY ,
	customername varchar (255),
	phonenumber varchar (255),
	email varchar (255),
	adress varchar (255)
);

create table invoice (
	invoiceid SERIAL PRIMARY KEY ,
	totalprice varchar (255),
	customername varchar (255)
);

