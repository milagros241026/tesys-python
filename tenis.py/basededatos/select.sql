CREATE TABLE departamentos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE empleados (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    salario NUMERIC(10,2),
    id_departamento INTEGER REFERENCES departamentos(id),
    fecha_ingreso DATE
);

INSERT INTO departamentos (nombre) VALUES
    ('Sistemas'),
    ('Ventas'),
    ('Recursos Humanos'),
    ('Marketing');

SELECT *
FROM empleados;

SELECT nombre
FROM empleados;

SELECT *
FROM empleados;
WHERE salario >650000;

SELECT *
FROM empleados;
WHERE id_departamento = 1

SELECT *
FROM empleados;
ORDEN BY salario DESC;
LIMIT 3

SELECT *
FROM empleados;
WHERE apellido LIKE 'G%';

SELECT *
FROM empleados;
WHERE id_departamento IS NULL

SELECT *
FROM empleados;
WHERE fecha_ingreso < '01-01-2022';

SELECT *
FROM empleados;
WHERE salario BETWEEN 600000 AND 800000
