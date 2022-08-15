CREATE database Practica1_indoor;
use Practica1_indoor;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone="+00:00";


CREATE table Distancia (
	id int auto_increment,
    distancia float,
    fecha datetime,
    primary key (id)
);

CREATE table Velocidad (
	id int auto_increment,
    vel float,
    fecha datetime,
    primary key (id)
);

CREATE table Oxigeno (
	id int auto_increment,
    pulsoConOxigeno float,
    fecha datetime,
    primary key (id)
);

CREATE TABLE Calorias (
	id int auto_increment,
    caloriasQuem float,
    fecha datetime,
    primary key (id)
);

CREATE table Frec_Card(
	id int auto_increment,
    pulsoCard float,
    fecha datetime,
    primary key (id)
);

CREATE table Temp_Corp(
	id int auto_increment,
    temperatura float,
    fecha datetime,
    primary key (id)
);