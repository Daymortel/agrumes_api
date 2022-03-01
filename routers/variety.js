const { Router } = require('express');
const variety = require('../models/variety');
const router = new Router();

router.get('/', async (req, res) => {
  const varietys = await variety.findAll();
  res.json(varietys);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const varietys = await variety.findOne(id);
  res.json(varietys);
});

router.post('/', async (req, res) => {
  const body = req.body;
  await variety.insert(body);
  res.json('Data inserted with succes !')
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await variety.destroy(id);
  res.json('Data deleted with succes !')
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  await variety.update(id, body);
  res.json('Data updated with succes !')
});

module.exports = router;
