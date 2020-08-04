/*Materiales: Ver todos, ver uno por id, agregar uno, modificar uno, borrar uno */

function read(sql) {
    let query = sql.query(
        `SELECT * FROM productos`, {
        type: sql.QueryTypes.SELECT
    })
    return query
};

function readById(sql, id) {
    let query = sql.query(
        `SELECT * FROM productos
        WHERE id = :id`, {
        replacements: {
            id
        },
        type: sql.QueryTypes.SELECT
    })
    return query
}

function readByType(sql, tipo) {
    let query = sql.query(
        `SELECT * FROM productos
        WHERE tipo = :tipo`, {
        replacements: {
            tipo
        },
        type: sql.QueryTypes.SELECT
    })
    return query
}

function create(sql, tipo, color, tamanio, precio, precio_por_mayor, comentario, stock) {
    let query = sql.query(
        `INSERT INTO productos (tipo, color, tamanio, precio, precio_por_mayor, comentario, stock)
        VALUES (:tipo, :color, :tamanio, :precio, :precio_por_mayor, :comentario, :stock)`, {
        replacements: {
            tipo,
            color,
            tamanio,
            precio,
            precio_por_mayor,
            comentario,
            stock
        },
        type: sql.QueryTypes.INSERT
    })
    return query
}

function update(sql, tipo, color, tamanio, precio, precio_por_mayor, comentario, stock) {
    let query = sql.query(
        `UPDATE productos 
        SET tipo = :tipo, color = :color, tamanio = :tamanio, precio = :precio, precio_por_mayor = :precio_por_mayor, comentario = :comentario, stock = :stock
        WHERE tipo = :tipo & color = :color & tamanio = :tamanio`, {
        replacements: {
            tipo,
            color,
            tamanio,
            precio,
            precio_por_mayor,
            comentario,
            stock
        },
        type: sql.QueryTypes.UPDATE
    })
    return query
}

module.exports = { read, readById, readByType, create, update }