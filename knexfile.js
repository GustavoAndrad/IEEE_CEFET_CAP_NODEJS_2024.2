require("dotenv").config();

module.exports = {
    client: "mysql",
    connection: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_NAME
    },
    migrations: {
        tablename: "migrations",
        directory: `${__dirname}/src/database/migrations/`
    }
}