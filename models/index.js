const dbConfig = require("../configs/dbConfig");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log(`connected!`);
  })
  .catch((err) => {
    console.log(err.message);
  });

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.products = require('./product.model.js')(sequelize,DataTypes)

db.sequelize.sync({force: false})
.then( () => {
    console.log('re-sync is done!')
})

module.exports = db; 

