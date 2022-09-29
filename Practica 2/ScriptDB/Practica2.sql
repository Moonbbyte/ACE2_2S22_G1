CREATE database Practica2_Barras;
use Practica2_Barras;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
--SET time_zone="+00:00";


CREATE table Usuario(
	id int auto_increment,
    nombreUsu varchar(50),
    pass varchar(50),
    primary key (id)
);

CREATE table DataUsu(
	id int auto_increment,
    edad int,
    peso float,
	genero varchar(1),
	estatura float,
	usuarioID int,
    primary key (id),
	FOREIGN KEY (usuarioID) REFERENCES Usuario(id)
);

CREATE table Frec_Card(
	id int auto_increment,
    pulsoCard float,
    fecha datetime,
    usuarioID int,
    primary key (id),
    FOREIGN KEY (usuarioID) REFERENCES Usuario(id)  
);

CREATE table Rango_mov(
	id int auto_increment,
    rango float,
    fecha datetime,
	usuarioID int,
    primary key (id),
    FOREIGN KEY (usuarioID) REFERENCES Usuario(id)  
);


CREATE table Frec_rep(
	id int auto_increment,
    vel_rep float,
    fecha datetime,
	usuarioID int,
    primary key (id),
    FOREIGN KEY (usuarioID) REFERENCES Usuario(id)
);


CREATE TABLE Calorias (
	id int auto_increment,
    caloriasQuem float,
    fecha datetime,
    usuarioID int,
    primary key (id),
    FOREIGN KEY (usuarioID) REFERENCES Usuario(id)
);

