const sequelize = require('sequelize')

const database = new sequelize(
    'student_control',      //Database 
    'student_control',      //User
    'chefinho2024',         //Password
    {                       //Config
        host: 'localhost',      //Host
        port: 58868,            //Dynamic TCP/IP port
        dialect: 'mssql'        //Type of database
    }
)

database.sync();            //Sync with local database, check the models
module.exports = database;  //exports database for others to use