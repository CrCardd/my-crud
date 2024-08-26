const sequelize = require('sequelize');         //Import sequelize
const database = require('../config/db');    //Import defined database

const Group = database.define('Group', {        //Define table name
        IDGroup: {
            type: sequelize.INTEGER,            //Define column type
            autoIncrement: true,
            primaryKey: true,
            allowNull: false                    //Impossibility insert NULL value
        },
        Name: {
            type: sequelize.STRING,
            allowNull: false
        },
        Description: {
            type: sequelize.STRING,
            allowNull: false
        },
        Capacity: {
            type: sequelize.INTEGER,
            allowNull: false
        }
    }
);


module.exports = Group;