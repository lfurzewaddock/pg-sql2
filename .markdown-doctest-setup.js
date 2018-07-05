const sql = require("./src");
module.exports = {
  require: {
    "pg-sql2": sql,
  },
  globals: {
    sql,
  },
};
