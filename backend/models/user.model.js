const {DataTypes} = require('sequelize');
const {sequelize} = require('../dbConfig/dbSequelize.js');

exports.User = sequelize.define('user',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    email: {
        type:DataTypes.STRING,
        allowNull: false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
});
