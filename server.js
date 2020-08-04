//Imports
const express = require('express');
const server = express();
const server_port = 3000;
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const materiales = require('./queries/materiales.js');
const pedidos = require('./queries/pedidos.js');
const productos = require('./queries/productos.js');
const servicios = require('./queries/servicios.js');
const turnos = require('./queries/turnos.js');

const { db_host, db_name, db_user, db_password, db_port } = require('./database/db_data');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(`mysql://${db_user}@${db_host}:${db_port}/${db_name}`);


///Server setup
server.listen(server_port, () => {
    console.log(`Server started in port ${server_port}`);
})
server.use(bodyParser.json(), cors());

//Endpoint prueba
server.get('/', async (req, res) => {
    let data = await sequelize.query(
        `SELECT * FROM productos
        WHERE tipo = 'shampoo'`, {
        type: sequelize.QueryTypes.SELECT
    })
    res.status(200).json(data)
})


//Endpoints materiales
server.get('/v1/materiales', async (req, res) => {
    let data = await materiales.read(sequelize)
    res.status(200).json(data)
});
server.get('/v1/materiales/:id', async (req, res) => {
    //Ver material por id
});
server.post('/v1/materiales', async (req, res) => {
    //Agregar un material
});
server.put('/v1/materiales/:id', async (req, res) => {
    //Modificar un material
});
server.delete('/v1/materiales/:id', async (req, res) => {
    //Borrar material por id
});


//Endpoints productos
server.get('/v1/productos', async (req, res) => {
    //Ver todos los productos 
});
server.post('/v1/productos', async (req, res) => {
    //Agregar un producto
});
server.get('/v1/productos/:tipo', async (req, res) => {
    //Ver productos por tipo
});
server.get('/v1/productos/:id', async (req, res) => {
    //Ver producto por id
});
server.put('/v1/productos/:id', async (req, res) => {
    //Modificar un producto
});
server.delete('/v1/productos/:id', async (req, res) => {
    //Borrar producto por id
});


//Endpoint servicios
server.get('/v1/servicios', async (req, res) => {
    //Ver todos los servicios 
});
server.post('/v1/servicios', async (req, res) => {
    //Agregar un servicios
});
server.get('/v1/servicios/:id', async (req, res) => {
    //Ver servicio por id
});
server.put('/v1/servicios/:id', async (req, res) => {
    //Modificar un servicio
});
server.delete('/v1/servicios/:id', async (req, res) => {
    //Borrar servicio por id
});


//Endpoints turnos
server.get('/v1/turnos', async (req, res) => {
    //Ver todos los turnos 
});
server.post('/v1/turnos', async (req, res) => {
    //Agregar un turnos
});
server.get('/v1/turnos/:id', async (req, res) => {
    //Ver turno por id
});
server.put('/v1/turnos/:id', async (req, res) => {
    //Modificar un turno
});
server.delete('/v1/turnos/:id', async (req, res) => {
    //Borrar turno por id
});


//Endpoints pedidos
server.get('/v1/pedidos', async (req, res) => {
    //Ver todos los pedidos 
});
server.post('/v1/pedidos', async (req, res) => {
    //Agregar un pedidos
});
server.get('/v1/pedidos/:id', async (req, res) => {
    //Ver pedido por id
});
server.put('/v1/pedidos/:id', async (req, res) => {
    //Modificar un pedido
});
server.delete('/v1/pedidos/:id', async (req, res) => {
    //Borrar pedido por id
});










//Error detection
server.use((err, req, res, next) => {
    if (!err) {
        return next()
    }
    else {
        console.log("An error has ocurred");
        res.status(500).json(err.message)
    }
})