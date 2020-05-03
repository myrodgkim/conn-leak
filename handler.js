'use strict';

const mysql = require('mysql2/promise');

const sleep = (ms) => {
    return new Promise(resolve=>{
        setTimeout(resolve, ms);
    });
};

const getConnection = function() {
    return mysql.createConnection({
        host: process.env.RDS_HOSTNAME,
        user: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DATABASE,
        port: process.env.RDS_PORT,
        waitForConnections: true,
        connectionLimit: 3,
        queueLimit: 0
    });
}

module.exports.hello = async (event, context, callback) => {

    try {
        const connection = await getConnection();

        console.log("Begin");
        connection.connect(function (err) {
            if (err) {
                throw new Error("연결실패");
            }
        });

        let sql = process.env.sql;
        console.log("SQL : ", sql);

        await sleep(1000);
        
        const [rows, fields] = await connection.execute(sql, []);

        await sleep(1000);

        rows.forEach((entry) => {
            console.log('Result : ', entry);
        });

        connection.end();
        console.log("Done");

    } catch (err) {
        // connection.end();
        console.log(err);
    }
};
