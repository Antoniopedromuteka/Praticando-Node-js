

const db = require('./db');



const Usuario = db.sequelize.define("usuairo", {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: db.Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: db.Sequelize.STRING,
        allowNull: false,
    }
})


Usuario.sync();


module.exports = Usuario;