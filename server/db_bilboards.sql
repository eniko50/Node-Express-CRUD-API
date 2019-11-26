create database if not exists db_bilboards;

use db_bilboards;
create table place (
	id integer auto_increment,
    name varchar (255) not null,
    monthly_rent_price integer,
    primary key(id)
);
create table bilboard (
	id integer auto_increment,
    code varchar(50) not null,
    dimension enum ('400x300', '500x240', '500x210', '360x270', '260x150') not null,
    free enum ('Da', 'Ne') not null,
    side enum ('A', 'B', 'Desni', 'Levi', 'Gornji', 'Donji', 'Prvi', 'Drugi', 'Treći', 'Četvrti', 'Peti'),
    lighting enum ('Da', 'Ne', 'Prosvetljen', 'Cerada'),
    location_description varchar(250),
	place_id integer not null,
    primary key(id),
    foreign key(place_id) references place(id)
);
create table rent (
	id integer auto_increment,
    first_name varchar(255) not null,
    last_name varchar (255) not null,
    email varchar(255) not null,
    bilboard_id integer not null,
    start_rent_date date not null,
    end_rent_date date not null,
    primary key (id),
    foreign key (bilboard_id) references bilboard (id)
);

select* from place;
-- insert into place (name) values ('Novi Sad'), ('Kikinda'), ('Beograd'), ('Nis');

select*from bilboard;
-- insert into bilboard (code, dimension, free, side, lighting, location_description, place_id) values 
-- 	('KI001', '500x240', 'Da', 'A', 'Ne', 'Raskrsnica na samom ulazu grada, na putu iz pravca Subotice', 2),
--     ('KI003', '400x300', 'Da', 'A', 'Da', 'Svetosavska ulica', 2),
--     ('NS001', '400x300', 'Da', 'A', 'Da', 'Raskrsnica Bulevar Evrope i Futoske ulice. Lice prema centru', 1);

-- select IF(free, 'Da', 'Ne') free, IF(lighting, 'Da', 'Ne') lighting from bilboard;