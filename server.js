const express = require('express');
const pg = require('pg');

const server = express();
const PORT = 3000;

pg.connect('postgres://postgres:mario@localhost:5432/practicedocker');
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
server.get('/', (request, response) => response.status(200).send('hello'));