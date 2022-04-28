const sqlite = require('better-sqlite3');
const path = require('path')
const db = new sqlite(path.resolve("src/db","user.db"), { fileMustExist: true})

function query(sql, params){
    return db.prepare(sql).all(params)
}
function insert(sql, params){
    const query = db.prepare(sql)
    return query.run(params)
}

module.exports = { query, insert }