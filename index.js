const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename:'./dev.sqlite3'
    },
    useNullAsDefault: true,
}

const db = (knexConfig);

const server = express();
server.use(express.json());
server.use(helmet());

const port = 5000;
server.listen(port, function() {
    console.log(`server listening on ${port}`)
})