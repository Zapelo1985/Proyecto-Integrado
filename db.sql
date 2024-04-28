-- PROYECTO LENGUAJE

-- crear BD

create database habit_games;

-- usa BD
use habit_games;

-- mostrar tablas
show tables;




-- tabla usuario

create table USERS(
	id INT primary key auto_increment,
	name VARCHAR(50) not null,
	surname VARCHAR(50) not null,
	passwd VARCHAR(50)  not null,
	email VARCHAR(50) not null unique
	
);

-- Insertar datos

insert into USERS (name, surname, passwd, email)
values
    ('Luis', 'Gracia Nuñez', 'Lu03213', 'luisGN@gmail.com'),
    ('Alberto', 'Perez Perez', 'seifer44', 'AlbertoPP@gmail.com'),
    ('Ivan', 'Sanchez Roca', 'loki666', 'IvanSR@gmail.com'),
    ('Alejandro', 'Molina Venegas', 'cocotte06', 'AlejandroMV@gmail.com'),
    ('David', 'Griñán Ledesma', 'zapelo310', 'DavidGL@gmail.com');
  

   select * from USERS;
   
  
  
-- tabla producto
  
  

create table PRODUCTS(
	id INT primary key auto_increment,
	name_product VARCHAR(50) not null,
	price DECIMAL(10, 2) not null,
	description TEXT not null,
	category VARCHAR(50) not null,
	author VARCHAR(50) not null,
	inventory INT not null,
	offer DECIMAL,
	feature boolean
);

insert into PRODUCTS (name_product, price, description, category, author, inventory, offer, feature)
VALUES
    ('Cocodrilo Sacamuelas', 19.99, 'Potente smartphone con funciones avanzadas.', 'Interactivo','Lorenzo Silva', 50, NULL, true),
    ('Monos Locos', 21.49, 'Portátil de alto rendimiento para profesionales.', 'Electrónico', 'Lorenzo Silva', 40, 20.00, false),
    ('Nemesis', 146.60, 'Comfortable cotton T-shirt in blue.', 'Ropa', 'Kevin Riley', 100, NULL, true),
    ('Prueba o Verdad', 34.02, 'Potente smartphone con funciones avanzadas.', 'Electrónico', 'Zé Mendes', 50, NULL, true);

select * from PRODUCTS;




-- tabla pedidos



CREATE TABLE ORDERS(
    id INT primary key auto_increment,
    user_id INT not null,
    product_id INT not null, 
    order_date DATE not null, 
    FOREIGN KEY (user_id) REFERENCES USERS(id),
    FOREIGN KEY (product_id) REFERENCES PRODUCTS(id)
);

insert into ORDERS (user_id, product_id, order_date)
values
    (1, 1, '2024-04-01'),
    (2, 2, '2024-04-01'),
    (3, 3, '2024-04-03'),
    (4, 4, '2024-04-04');
   
   select * from ORDERS;

  
  
  
-- tabla carrito

CREATE TABLE PURCHASE(
	id INT primary key auto_increment,
    cart_id INT,
    user_id INT not null,
    product_id INT not null,
    quantity INT not null,
    FOREIGN KEY (user_id) REFERENCES USERS(id),
    FOREIGN KEY (product_id) REFERENCES PRODUCTS(id)
);

insert into PURCHASE (cart_id, user_id, product_id, quantity)
values
 	(1, 1, 1, 1),
    (1, 1, 1, 6),
    (1, 1, 1, 2),
    (1, 1, 1, 7);





create table IMAGES (
    id INT primary key auto_increment,
    item_id INT not null,
    image_url LONGBLOB not null,
    descripcion VARCHAR(1000)
    
);


SHOW VARIABLES LIKE 'secure_file_priv';


insert into IMAGES (item_id, image_url, descripcion)
values
 	(1, LOAD_FILE('C:\\ProgramData\\MySQL\\MySQL Server 8.0\\Uploads\\products\\saca_muelas.jpg'),'Cocodrilo sacamuelas');
 	

select * from images


-- TENER EN CUENTA LAS CATEGORIAS AÑADIDAS AQUI PARA EL HTML
-- FOREIGN KEY ("") REFERENCES PRODUCT(id)


