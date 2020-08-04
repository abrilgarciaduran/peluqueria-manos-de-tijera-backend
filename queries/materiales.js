/*Materiales: Ver todos, ver uno por id, agregar uno, modificar uno, borrar uno */

function read(sql) {
    let query = sql.query(
        `SELECT * FROM materiales`, {
        type: sql.QueryTypes.SELECT
    })
    return query
};

function readById(sql, id) {
    let query = sql.query(
        `SELECT * FROM materiales
        WHERE id = :id`, {
        replacements: {
            id
        },
        type: sql.QueryTypes.SELECT
    })
    return query
}

function readByName(sql, nombre) {
    let query = sql.query(
        `SELECT * FROM materiales
        WHERE nombre = :nombre`, {
        replacements: {
            nombre
        },
        type: sql.QueryTypes.SELECT
    })
    return query
}

function create(sql, nombre, tamanio, vendedor, stock) {
    let query = sql.query(
        `INSERT INTO materiales (nombre, tamanio, vendedor, stock)
        VALUES (:nombre, :tamanio, :vendedor, :stock)`, {
        replacements: {
            nombre,
            tamanio,
            vendedor,
            stock
        },
        type: sql.QueryTypes.INSERT
    })
    return query
}

function update(sql, nombre, tamanio, vendedor, stock) {
    let query = sql.query(
        `UPDATE materiales 
        SET nombre = :nombre, tamanio = :tamanio, vendedor = :vendedor, stock = :stock
        WHERE nombre = :nombre`, {
        replacements: {
            nombre,
            tamanio,
            vendedor,
            stock
        },
        type: sql.QueryTypes.UPDATE
    })
    return query
}

module.exports = { read, readById, readByName, create, update }