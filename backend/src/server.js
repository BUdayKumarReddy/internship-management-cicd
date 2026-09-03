require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

app.get("/api/health", async (req, res) => {

    try {

        const connection = await pool.getConnection();

        await connection.query("SELECT 1");

        connection.release();

        res.status(200).json({
            status: "UP",
            database: "CONNECTED",
            service: "Internship Management Backend"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            status: "DOWN",
            database: "DISCONNECTED"
        });

    }

});

app.get("/api/internships", async (req, res) => {

    try {

        const [rows] = await pool.query(
            "SELECT * FROM internships ORDER BY id DESC"
        );

        res.json(rows);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Unable to fetch internships"
        });

    }

});

app.post("/api/internships", async (req, res) => {

    try {

        const {
            title,
            company,
            location,
            duration
        } = req.body;

        const [result] = await pool.query(
            `INSERT INTO internships
            (title, company, location, duration)
            VALUES (?, ?, ?, ?)`,
            [title, company, location, duration]
        );

        res.status(201).json({
            message: "Internship created",
            id: result.insertId
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Unable to create internship"
        });

    }

});

const PORT = process.env.PORT || 5000;

if (require.main === module) {

    app.listen(PORT, () => {
        console.log(`Backend running on port ${PORT}`);
    });

}

module.exports = app;