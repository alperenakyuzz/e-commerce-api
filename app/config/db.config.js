module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "sustaily_test",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 300000,
    idle: 10000
  },
  logQueryParameters: false

};
