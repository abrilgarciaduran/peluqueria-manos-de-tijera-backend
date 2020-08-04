/*Pedidos: Ver todos, ver uno por id, ver productos de un pedido, agregar uno, agregar productos, modificar uno, modificar productos, modificar estado, borrar uno */

function read(sql) {
    let query = sql.query(
        `SELECT * FROM pedidos`, {
        type: sql.QueryTypes.SELECT
    })
    return query
};

function readById(sql, id) {
    let query = sql.query(
        `SELECT * FROM pedidos
        WHERE id = :id`, {
        replacements: {
            id
        },
        type: sql.QueryTypes.SELECT
    })
    return query
}

function readByContact(sql, contacto) {
    let query = sql.query(
        `SELECT * FROM pedidos
        WHERE contacto = :contacto`, {
        replacements: {
            contacto
        },
        type: sql.QueryTypes.SELECT
    })
    return query
}

function create(sql, nombre, contacto, dia_hora, precio_final, estado) {
    let query = sql.query(
        `INSERT INTO pedidos (nombre, contacto, dia_hora, precio_final, estado)
        VALUES (:nombre, :contacto, :dia_hora, :precio_final, :estado)`, {
        replacements: {
            nombre,
            contacto,
            dia_hora,
            precio_final,
            estado
        },
        type: sql.QueryTypes.INSERT
    })
    return query
}

function createProductsOrdered(sql, id_producto, id_pedido) {
    let query = sql.query(
        `INSERT INTO productos_pedidos (id_producto, id_pedido)
        VALUES (:id_producto, :id_pedido)`, {
        replacements: {
            id_producto,
            id_pedido
        },
        type: sql.QueryTypes.INSERT
    })
    return query
}

//Modificacion de estado
function update(sql, estado, id) {
    let query = sql.query(
        `UPDATE pedidos 
        SET estado = :estado
        WHERE id = :id`, {
        replacements: {
            id,
            estado
        },
        type: sql.QueryTypes.UPDATE
    })
    return query
}

function deleteById(sql, estado, id) {
    let query = sql.query(
        `UPDATE from pedidos
        WHERE id = :id`, {
        replacements: {
            id,
            estado
        },
        type: sql.QueryTypes.DELETE
    })
    return query
}

module.exports = { read, readById, readByContact, create, createProductsOrdered, update, deleteById }