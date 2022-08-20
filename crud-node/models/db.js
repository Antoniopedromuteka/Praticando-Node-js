

const Sequelize = require("sequelize");

const sequelize = new Sequelize("baanco", "usuario", "senha",{
    host: '127.0.0.1',
    dialect: 'mysql',
    define:{
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true,
    },
    logging: false
});