require('dotenv').config();
const express = require('express');
const app = express();
const species = require('./routers/species');
const variety = require('./routers/variety');
// const speciess = require('./models/species');
app.use(express.json());
app.use('/species', species);
app.use('/variety', variety);

// speciess.findOne(17).then(console.table);
// speciess.update(17, { scientific_name: 'Playstation 5', vernacular_name: 'PS5' }).then(() => {
//   speciess.findOne(17).then(console.table);
// });
// species.findAll().then(console.table);
// variety.findAll().then(console.table);

const port = 3467;
app.listen(port, () => console.log(`Server connected to port ${port}.`));

const portDB = process.env.PGPORT;
app.listen(portDB, () => console.log(`Database connected to port ${portDB}`));
