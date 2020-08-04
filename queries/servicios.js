/*Servicios: Ver todos, ver uno por id, agregar uno, modificar uno, borrar uno */

function read(sql) {
    let query = sql.query(
        `SELECT * FROM servicios`, {
        type: sql.QueryTypes.SELECT
    })
    return query
};

function readById(sql, id) {
    let query = sql.query(
        `SELECT * FROM servicios
        WHERE id = :id`, {
        replacements: {
            id
        },
        type: sql.QueryTypes.SELECT
    })
    return query
}

function readByName(sql, servicio) {
    let query = sql.query(
        `SELECT * FROM servicios
        WHERE servicio = :servicio`, {
        replacements: {
            servicio
        },
        type: sql.QueryTypes.SELECT
    })
    return query
}

function create(sql, servicio, largo_pelo, precio, demora_minutos) {
    let query = sql.query(
        `INSERT INTO materiales (servicio, largo_pelo, precio, demora_minutos)
        VALUES (:servicio, :largo_pelo, :precio, :demora_minutos)`, {
        replacements: {
            servicio,
            largo_pelo,
            precio,
            demora_minutos
        },
        type: sql.QueryTypes.INSERT
    })
    return query
}

function update(sql, servicio, largo_pelo, precio, demora_minutos) {
    let query = sql.query(
        `UPDATE materiales 
        SET servicio = :servicio, largo_pelo = :largo_pelo, precio = :precio, demora_minutos = :demora_minutos
        WHERE servicio = :servicio`, {
        replacements: {
            servicio,
            largo_pelo,
            precio,
            demora_minutos
        },
        type: sql.QueryTypes.UPDATE
    })
    return query
}

function deleteByName(sql, servicio) {
    let query = sql.query(
        `DELETE * FROM materiales
        WHERE servicio = :servicio`, {
        replacements: {
            servicio
        },
        type: sql.QueryTypes.DELETE
    })
    return query
}

module.exports = { read, readById, readByName, create, update, deleteByName }