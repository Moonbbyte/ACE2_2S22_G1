CREATE database Proyecto1_boxeo;
use Practica1_indoor;
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone="+00:00";


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

CREATE table Fuerza(
	id int auto_increment,
    fuerza_g float,
    fecha datetime,
	usuarioID int,
    primary key (id),
FOREIGN KEY (usuarioID) REFERENCES Usuario(id)
);


CREATE table Velocidad(
	id int auto_increment,
    vel_g float,
    fecha datetime,
	usuarioID int,
    primary key (id),
FOREIGN KEY (usuarioID) REFERENCES Usuario(id)
);


CREATE table Ritmo(
	id int auto_increment,
    ritmo_g float,
    fecha datetime,
	usuarioID int,
    primary key (id),
FOREIGN KEY (usuarioID) REFERENCES Usuario(id)
);


