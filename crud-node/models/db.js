

const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_exemplo", "root", "",{
    host: '127.0.0.1',
    dialect: 'mysql',
    define:{
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true,
    },
    logging: false
});



// sequelize.authenticate().then(()=>{

//     console.log("conectedo no banco com sucesso!");

// }).catch((err)=>{
//     console.log("falha ao se conectar "+err);
// })




module.exports = {Sequelize, sequelize}