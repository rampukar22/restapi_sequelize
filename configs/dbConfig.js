module.exports = {
  HOST: "localhost",
  USER: "user1",
  PASSWORD: "user1",
  DB: "node_sequelize_db",
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
