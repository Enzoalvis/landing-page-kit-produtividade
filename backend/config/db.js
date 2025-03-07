const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password123", // Substitua por uma senha segura
  database: "tracking_db",
  multipleStatements: true, // Para executar várias queries juntas
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no banco de dados:", err);
    return;
  }
  console.log("Banco de dados conectado com sucesso!");
});

module.exports = connection;
