const { Router } = require('express');
const species = require('../models/species');
const router = new Router();

router.get('/', async (req, res) => {
  const speciess = await species.findAll();
  res.status(200).json(speciess);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const speciess = await species.findOne(id);
  res.status(200).json(speciess);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const speciess = await species.insert(body);
  res.status(201).json(speciess);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await species.destroy(id);
  res.status(204).json('Data deleted with succes !');
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const speciess = await species.update(id, body);
  res.status(200).json(speciess);
});

router.get('/filter/family/:fa', async (req, res) => {
  const fa = req.params.fa;
  const family = await species.findByFamily(fa);
  res.status(200).json(family);
});

module.exports = router;
