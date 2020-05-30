module.exports = {
  HOST: "localhost",
  USER: "root",
  // PASSWORD: "",
  PASSWORD: "Moriarty@221B",
  //DB: "feel_good_test",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
