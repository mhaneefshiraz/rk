let mysql = require('mysql');
let SETTINGS = require("../config/env.config");

var _m = {};
_m.connection = null;
module.exports = {
    connect: () => {
        _m.connection = mysql.createPool({
            connectionLimit: 10,
            host: SETTINGS.db.host,
            user: SETTINGS.db.username,
            password: SETTINGS.db.password,
            database: SETTINGS.db.database, 
            insecureAuth: true,
            multipleStatements: true,
            waitForConnections: true,
            queueLimit: 10
        });

        return _m.connection;
    },
    getNewConnection: () => {
        return _m.connection;
    }
};

