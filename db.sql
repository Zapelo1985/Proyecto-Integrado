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
	passwd VARCHAR(255)  not null,
	email VARCHAR(50) not null unique
	
);

-- Insertar datos

insert into USERS (name, surname, passwd, email)
values
    ('Jesús', 'Sanchez Muñoz', '1234as', 'jesus02@gmail.com'),
    ('Jaime', 'Garcia Granados', 'poke42', 'jaimegg@gmail.com'),
    ('Javier', 'Castrillon Suárez', 'pikpo567', 'jav789@gmail.com'),
    ('Adrián', 'Velis Roca', 'raxp90', 'adrian7@gmail.com'),
    ('Daniel', 'Maya Maduro', 'dmaya42', 'dmaya42@gmail.com');
  

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
    ('Cocodrilo Sacamuelas', 19.99, 'Powerful smartphone with advanced features.', 'Interactivo','Lorenzo Silva', 50, NULL, true),
    ('Monos Locos', 21.49, 'High-performance laptop for professionals.', 'Electronics', 'Lorenzo Silva', 40, 20.00, false),
    ('Nemesis', 146.60, 'Comfortable cotton T-shirt in blue.', 'Clothing', 'Kevin Riley', 100, NULL, true),
    ('Prueba o Verdad', 34.02, 'Powerful smartphone with advanced features.', 'Electronics', 'Zé Mendes', 50, NULL, true);

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
    (1, 1, '2024-04-11'),
    (2, 2, '2024-04-12'),
    (3, 3, '2024-04-13'),
    (4, 4, '2024-04-14');
   
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
 	(1, 1, 1, 3),
    (1, 1, 1, 2),
    (1, 1, 1, 4),
    (1, 1, 1, 5);





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


