"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var _a = require('pg'), Pool = _a.Pool, Client = _a.Client;
var LibPg = {
    getPool: function () {
        try {
            var pool = new Pool({
                user: process.env.POSTGRES_USER,
                host: process.env.POSTGRES_HOST,
                database: process.env.POSTGRES_DATABASE,
                password: process.env.POSTGRES_PASSWORD,
                port: process.env.POSTGRES_PORT,
            });
            return pool;
        }
        catch (e) {
            console.error(e);
            throw new Error('Error , getPool');
        }
    },
    getClient: function () {
        try {
            var client = new Client({
                user: process.env.POSTGRES_USER,
                host: process.env.POSTGRES_HOST,
                database: process.env.POSTGRES_DATABASE,
                password: process.env.POSTGRES_PASSWORD,
                port: process.env.POSTGRES_PORT,
            });
            client.connect();
            return client;
        }
        catch (err) {
            console.log(err);
            throw new Error('Error, getClient');
        }
    },
};
exports.default = LibPg;
