import mysql from "mysql2/promise";

let mysqlconn = null;

export function mysqlconnFn() {
  if (!mysqlconn) {
    mysqlconn = mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "trqttrqtd",
      database: "ialf",
    });
    // mysqlconn = mysql.createConnection({
      // host: "162.241.218.208",
      // user: "algyvwmy_state_reader",
      // password: "SveltekitMySQL",
      // database: "algyvwmy_states",
    // });
  }

  return mysqlconn;
}
