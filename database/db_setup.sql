CREATE TABLE turnos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (60) NOT NULL,
    contacto VARCHAR (255) NOT NULL,
    dia_hora datetime NOT NULL
);
CREATE TABLE servicios (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    servicio VARCHAR (255) NOT NULL,
    largo_pelo ENUM("corto", "hombros", "mediano", "largo", "N/A"),
    precio INT NOT NULL,
    demora_minutos INT NOT NULL
);
CREATE TABLE productos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    tipo ENUM('tintura', 'shampoo', 'restaurador', 'mousse') NOT NULL,
    color VARCHAR (255) NOT NULL,
    tamanio ENUM('150ml', '210ml', '250ml', '500ml', '1l', '5l') NOT NULL,
    precio INT NOT NULL,
    precio_por_mayor INT NOT NULL,
    comentario VARCHAR (255) NOT NULL,
    stock INT NOT NULL DEFAULT 0
);
CREATE TABLE materiales (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (255) NOT NULL,
    tamanio VARCHAR (255) NOT NULL,
    vendedor VARCHAR (255) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    falta BOOLEAN DEFAULT FALSE
);
CREATE TABLE pedidos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (255) NOT NULL,
    contacto VARCHAR (255) NOT NULL,
    dia_hora datetime NOT NULL,
	precio_final INT NOT NULL,
    estado ENUM('nuevo', 'preparando', 'enviando', 'cancelado', 'entregado')
);
CREATE TABLE productos_pedidos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    id_producto INT NOT NULL,
    id_pedido INt NOT NULL
);
CREATE TABLE servicios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    servicio VARCHAR (255) NOT NULL,
	demora_minutos INT NOT NULL,
    precio INT NOT NULL
)

INSERT INTO servicios (servicio, demora_minutos, precio)
VALUES ('corte', 30, 500), ('color', 1, 1), ('caute', 1, 1), ('deco', 1, 1), ('retoque', 1, 1), ('arreglo', 1, 1);

INSERT INTO productos (tipo, color, tamanio, precio, precio_por_mayor, stock)
VALUES ('mousse', 'NA', '210ml', 250, 250, 3),
('restaurador', 'NA', '150ml', 250, 250, 4),
('restaurador', 'NA', '250ml', 400, 400, 0),
('restaurador', 'NA', '500ml', 700, 700, 0),
('shampoo', 'violeta', '150ml', 250, 250, 0),
('shampoo', 'violeta', '250ml', 400, 400, 1),
('shampoo', 'violeta', '500ml', 700, 700, 0),
('shampoo', 'azul', '150ml', 250, 250, 0),
('shampoo', 'azul', '250ml', 400, 400, 0),
('shampoo', 'azul', '500ml', 700, 700, 0),
('shampoo', 'rojo', '150ml', 250, 250, 0),
('shampoo', 'rojo', '250ml', 400, 400, 0),
('shampoo', 'rojo', '500ml', 700, 700, 0),
('tintura', 'azul', '150ml', 250, 250, 0),
('tintura', 'azul', '250ml', 400, 400, 0),
('tintura', 'azul', '500ml', 700, 700, 0),
('tintura', 'azul', '1l', 1100, 1100, 0),
('tintura', 'azul', '5l', 4800, 4800, 0),
('tintura', 'rojo', '150ml', 250, 250, 0),
('tintura', 'rojo', '250ml', 400, 400, 0),
('tintura', 'rojo', '500ml', 700, 700, 0),
('tintura', 'rojo', '1l', 1100, 1100, 0),
('tintura', 'rojo', '5l', 4800, 4800, 0),
('tintura', 'amarillo', '150ml', 250, 250, 0),
('tintura', 'amarillo', '250ml', 400, 400, 0),
('tintura', 'amarillo', '500ml', 700, 700, 0),
('tintura', 'amarillo', '1l', 1100, 1100, 0),
('tintura', 'amarillo', '5l', 4800, 4800, 0),
('tintura', 'verde', '150ml', 250, 250, 0),
('tintura', 'verde', '250ml', 400, 400, 0),
('tintura', 'verde', '500ml', 700, 700, 0),
('tintura', 'verde', '1l', 1100, 1100, 0),
('tintura', 'verde', '5l', 4800, 4800, 0),
('tintura', 'violeta', '150ml', 250, 250, 0),
('tintura', 'violeta', '250ml', 400, 400, 0),
('tintura', 'violeta', '500ml', 700, 700, 0),
('tintura', 'violeta', '1l', 1100, 1100, 0),
('tintura', 'violeta', '5l', 4800, 4800, 0),
('tintura', 'gris', '150ml', 250, 250, 0),
('tintura', 'gris', '250ml', 400, 400, 0),
('tintura', 'gris', '500ml', 700, 700, 0),
('tintura', 'gris', '1l', 1100, 1100, 0),
('tintura', 'gris', '5l', 4800, 4800, 0),
('tintura', 'lila', '150ml', 250, 250, 0),
('tintura', 'lila', '250ml', 400, 400, 0),
('tintura', 'lila', '500ml', 700, 700, 0),
('tintura', 'lila', '1l', 1100, 1100, 0),
('tintura', 'lila', '5l', 4800, 4800, 0),
('tintura', 'naranja', '150ml', 250, 250, 0),
('tintura', 'naranja', '250ml', 400, 400, 0),
('tintura', 'naranja', '500ml', 700, 700, 0),
('tintura', 'naranja', '1l', 1100, 1100, 0),
('tintura', 'naranja', '5l', 4800, 4800, 0),
('tintura', 'rosa', '150ml', 250, 250, 0),
('tintura', 'rosa', '250ml', 400, 400, 0),
('tintura', 'rosa', '500ml', 700, 700, 0),
('tintura', 'rosa', '1l', 1100, 1100, 0),
('tintura', 'rosa', '5l', 4800, 4800, 0),
('tintura', 'fucsia', '150ml', 250, 250, 0),
('tintura', 'fucsia', '250ml', 400, 400, 0),
('tintura', 'fucsia', '500ml', 700, 700, 0),
('tintura', 'fucsia', '1l', 1100, 1100, 0),
('tintura', 'fucsia', '5l', 4800, 4800, 0),
('tintura', 'turquesa', '150ml', 250, 250, 0),
('tintura', 'turquesa', '250ml', 400, 400, 0),
('tintura', 'turquesa', '500ml', 700, 700, 0),
('tintura', 'turquesa', '1l', 1100, 1100, 0),
('tintura', 'turquesa', '5l', 4800, 4800, 0);

INSERT INTO servicios (servicio, largo_pelo, precio, demora_minutos)
VALUES ("corte", "N/A", 450, 30),
("corteYBarba", "N/A", 500, 40),
("bañoAminoacidos", "N/A", 600, 60),
("peinado", "N/A", 750, 60),
("lavado", "N/A", 150, 15),
("color-raices", "N/A", 800, 60),
("color-patch", "corto", 900, 120),
("color-patch", "hombros", 1100, 120),
("color-patch", "mediano", 1250, 120),
("color-patch", "largo", 1700, 120),
("color-patchMasColor", "corto", 1100, 150),
("color-patchMasColor", "hombros", 1300, 150),
("color-patchMasColor", "mediano", 1450, 150),
("color-patchMasColor", "largo", 1800, 150),
("color-bitono", "corto", 1200, 120),
("color-bitono", "hombros", 1350, 120),
("color-bitono", "mediano", 1500, 120),
("color-bitono", "largo", 1650, 120),
("color-puntasVivas(25cm)", "hombros", 2400, 180),
("color-puntasVivas(25cm)", "mediano", 2800, 180),
("color-puntasVivas(25cm)", "largo", 3200, 180),
("color-balayage(25cm)", "hombros", 2000, 180),
("color-balayage(25cm)", "mediano", 2400, 180),
("color-balayage(25cm)", "largo", 2900, 180),
("color-puntasDesgastadas(25cm)", "hombros", 1600, 180),
("color-puntasDesgastadas(25cm)", "mediano", 1800, 180),
("color-puntasDesgastadas(25cm)", "largo", 2100, 180),
("color-desgasteFantasia", "corto", 1900, 180),
("color-desgasteFantasia", "hombros", 2100, 180),
("color-desgasteFantasia", "mediano", 2350, 180),
("color-desgasteFantasia", "largo", 2700, 180),
("color-colorFantasia", "corto", 700, 60),
("color-colorFantasia", "hombros", 900, 60),
("color-colorFantasia", "mediano", 1100, 60),
("color-colorFantasia", "largo", 1300, 60),
("color-mechaMovil", "corto", 500, 150),
("color-mechaMovil", "hombros", 600, 150),
("color-mechaMovil", "mediano", 800, 150),
("color-mechaMovil", "largo", 950, 150),
("color-decoloracion", "corto", 1000, 120),
("color-decoloracion", "hombros", 1330, 120),
("color-decoloracion", "mediano", 1500, 120),
("color-decoloracion", "largo", 1800, 120),
("color-raicesDecoloracion", "N/A", 1300, 120),
("color-cauteSinVolumen", "corto", 800, 120),
("color-cauteConVolumen", "corto", 900, 120),
("color-cauteSinVolumen", "hombros", 1300, 120),
("color-cauteConVolumen", "hombros", 1450, 120),
("color-cauteSinVolumen", "mediano", 1600, 120),
("color-cauteConVolumen", "mediano", 1750, 120),
("color-cauteSinVolumen", "largo", 1900, 150),
("color-cauteConVolumen", "largo", 2100, 150);

