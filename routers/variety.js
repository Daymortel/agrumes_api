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
  const varietys = await variety.insert(body);
  res.json(varietys);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await variety.destroy(id);
  res.json('Data deleted with succes !');
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  await variety.update(id, body);
  res.json('Data updated with succes !');
});

router.get('/minju/:ju', async (req, res) => {
  const ju = req.params.ju;
  const minJu = await variety.findByMinJuiciness(ju);
  res.json(minJu);
});

router.get('/maxju/:ju', async (req, res) => {
  const ju = req.params.ju;
  const maxJu = await variety.findByMaxJuiciness(ju);
  res.json(maxJu);
});

router.get('/minbi/:bi', async (req, res) => {
  const bi = req.params.bi;
  const minBi = await variety.findByMinBitterness(bi);
  res.json(minBi);
});

router.get('/maxbi/:bi', async (req, res) => {
  const bi = req.params.bi;
  const maxBi = await variety.findByMaxBitterness(bi);
  res.json(maxBi);
});

router.get('/species/:sp', async (req, res) => {
  const sp = req.params.sp;
  const speciess = await variety.findBySpecies(sp);
  res.json(speciess);
});

module.exports = router;
