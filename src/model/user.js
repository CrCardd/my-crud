const sequelize = require('sequelize');
const database = require('../config/db');

const User = database.define('User', {
        IDUser: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        Name: {
            type: sequelize.STRING,
            allowNull: false
        },
        Password: {
            type: sequelize.STRING,
            allowNull: false
        },
        Picture: {
            type: sequelize.STRING,
            allowNull: false
        },
        Birth: {
            type: sequelize.DATEONLY,
            allowNull: false
        },
        Adm: {
            type: sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: false
        }
    }
);


module.exports = User;