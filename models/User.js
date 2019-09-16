const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'users',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        user_name: {
          type: Sequelize.TEXT
        },
        password: {
            type: Sequelize.TEXT
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