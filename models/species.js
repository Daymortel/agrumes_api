const db = require('./db');

const findAll = async () => {
  return await db('species').select();
}

const findOne = async (id) => {
  return await db('species').select().where({ id }).first();
}

const insert = async (object) => {
  return await db('species').returning(['id', 'scientific_name', 'vernacular_name', 'family']).insert(object);
}

const destroy = async (id) => {
  await db('species').delete().where({ id });
}

const update = async (id, object) => {
  await db('species').update(object).where({ id });
}

const findByFamily = async (family) => {
  return await db('species').select().where({ family });
}

module.exports = {
  findAll,
  findOne,
  insert,
  destroy,
  update,
  findByFamily
};
