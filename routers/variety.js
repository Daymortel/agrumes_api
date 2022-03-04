const { Router } = require('express');
const variety = require('../models/variety');
const router = new Router();

router.get('/', async (req, res) => {
  const varietys = await variety.findAll();
  res.status(200).json(varietys);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const varietys = await variety.findOne(id);
  res.status(200).json(varietys);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const varietys = await variety.insert(body);
  res.status(201).json(varietys);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await variety.destroy(id);
  res.status(204).json('Data deleted with succes !');
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const varietys = await variety.update(id, body);
  res.status(200).json(varietys);
});

router.get('/filter/species/:sp', async (req, res) => {
  const sp = req.params.sp;
  const speciess = await variety.findBySpecies(sp);
  res.status(200).json(speciess);
});

router.post('/scores', async (req, res) => {
  const body = req.body;
  const scores = await variety.findBetween(body);
  res.status(200).json(scores);
});

module.exports = router;
