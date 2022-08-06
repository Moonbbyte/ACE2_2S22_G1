CREATE database Practica1_indoor;
use Practica1_indoor;


CREATE table Distancia (
	id int auto_increment,
    distancia float,
    fecha timestamp,
    primary key (id)
);

CREATE table Velocidad (
	id int auto_increment,
    vel float,
    fecha timestamp,
    primary key (id)
);

CREATE table Oxigeno (
	id int auto_increment,
    pulsoConOxigeno int,
    fecha timestamp,
    primary key (id)
);

CREATE TABLE Calorias (
	id int auto_increment,
    caloriasQuem int,
    fecha timestamp,
    primary key (id)
);

CREATE table Frec_Card(
	id int auto_increment,
    pulsoCard int,
    fecha timestamp,
    primary key (id)
);

CREATE table Temp_Corp(
	id int auto_increment,
    temperatura int,
    fecha timestamp,
    primary key (id)
);