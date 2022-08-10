const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  host: "localhost",
  user: "postgres",
  connectionString: process.env.DATABASE_URL,
  port: process.env.PORT || 5432,
  password: "Fahad@7277",
  database: "postgres",
});

module.exports = client;
