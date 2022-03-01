const { Router } = require('express');
const species = require('../models/species');
const router = new Router();

router.get('/', async (req, res) => {
  const speciess = await species.findAll();
  res.json(speciess);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const speciess = await species.findOne(id);
  res.json(speciess);
});

router.post('/', async (req, res) => {
  const body = req.body;
  await species.insert(body);
  res.json('Data inserted with succes !')
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await species.destroy(id);
  res.json('Data deleted with succes !')
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  await species.update(id, body);
  res.json('Data updated with succes !')
});

module.exports = router;
