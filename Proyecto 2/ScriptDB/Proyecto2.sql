CREATE database Proyecto2_Box;
use Proyecto2_Box;
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

CREATE table Fuerza_impulso(
	id int auto_increment,
    fuerza_imp float,
    fecha datetime,
    usuarioID int,
    primary key (id),
    FOREIGN KEY (usuarioID) REFERENCES Usuario(id)  
);

CREATE table Velocidad_impulso(
	id int auto_increment,
    vel_imp float,
    fecha datetime,
	usuarioID int,
    primary key (id),
    FOREIGN KEY (usuarioID) REFERENCES Usuario(id)
);

CREATE table Fuerza_llegada(
	id int auto_increment,
    fuerza_llegada float,
    fecha datetime,
	usuarioID int,
    primary key (id),
    FOREIGN KEY (usuarioID) REFERENCES Usuario(id)  
);

CREATE table Peso(
	id int auto_increment,
    peso float,
    fecha datetime,
	usuarioID int,
    primary key (id),
    FOREIGN KEY (usuarioID) REFERENCES Usuario(id)
);

CREATE table Ritmo(
	id int auto_increment,
    ritmo float,
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