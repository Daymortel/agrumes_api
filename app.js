require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./models/db');
const species = require('./models/species');
const variety = require('./models/variety');

// species.findAll().then(console.table);
variety.findAll().then(console.table);

app.get('/species', async (req, res) => {
  const speciess = await species.findAll();
  res.json(speciess);
});

app.get('/variety', async (req, res) => {
  const varietys = await variety.findAll();
  res.json(varietys);
});

const port = 3467;
app.listen(port, () => console.log(`Server connected to port ${port}.`));

const portDB = process.env.PGPORT;
app.listen(portDB, () => console.log(`Database connected to port ${portDB}`));
