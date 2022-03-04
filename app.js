require('dotenv').config();
const express = require('express');
const app = express();
const species = require('./routers/species');
const variety = require('./routers/variety');
// const speciess = require('./models/species');
app.use(express.json());
app.use('/species', species);
app.use('/varieties', variety);
app.use((req, res) => {
  return res.status(400).send('Bad Request');
  return res.status(404).send('Not Found');
});

const port = 3467;
app.listen(port, () => console.log(`Server connected to port ${port}.`));

const portDB = process.env.PGPORT;
app.listen(portDB, () => console.log(`Database connected to port ${portDB}`));
