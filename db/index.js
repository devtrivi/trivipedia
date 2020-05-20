const S = require("sequelize")
const db = new S("postgres://postgres:123@localhost:5432/trivipedia",{
    logging:false
})

module.exports = db