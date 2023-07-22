const {Sequelize} = require('sequelize');

exports.sequelize = new Sequelize('prac_db', 'postgres', 'rootpg', {
  dialect: 'postgres',
  host: 'localhost',
  logging:false
});

