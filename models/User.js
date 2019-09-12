const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        userName: {
          type: Sequelize.SRTING
        },
        password: {
            type: Sequelize.SRTING
        },
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
{
        timestamps: false
    }
);