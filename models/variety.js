const db = require('./db');

const columns = ['id', 'cultivar', 'juiciness', 'bitterness', 'species_id'];

const findAll = async () => {
  return await db('variety').select('variety.id', 'cultivar', 'juiciness', 'bitterness', 'scientific_name', 'vernacular_name', 'family').join('species', function() {
    this.on('species.id', '=', 'variety.species_id');
  }).orderBy('variety.id');
}

const findOne = async (id) => {
  return await db('variety').select().where({ id });
}

const insert = async (object) => {
  return await db('variety').returning(['id', 'cultivar', 'juiciness', 'bitterness', 'species_id']).insert(object);
}

const destroy = async (id) => {
  await db('variety').delete().where({ id });
}

const update = async (id, object) => {
  await db('variety').update(object).where({ id });
}

const findBySpecies = async (speciesName) => {
  return await db('variety').select('variety.id', 'cultivar', 'juiciness', 'bitterness', 'scientific_name', 'vernacular_name', 'family').join('species', function() {
    this.on('species.id', '=', 'variety.species_id');
  }).where('vernacular_name', 'like', speciesName + '%');
}

const findBetween = async (criteria) => {
  let request = db('variety_with_full_name').select();

  const { juiciness, bitterness } = criteria;

  if (juiciness) {
    const { min, max } = juiciness
    if (min) {
      request = request.where('juiciness', '>=', min);
    }
    if (max) {
      request = request.where('juiciness', '<=', max);
    }
  }
  if (bitterness) {
    const { min, max } = bitterness
    if (min) {
      request = request.where('bitterness', '>=', min);
    }
    if (max) {
      request = request.where('bitterness', '<=', max);
    }
  }
  return await request;
}

module.exports = {
  findAll,
  findOne,
  insert,
  destroy,
  update,
  findBySpecies,
  findBetween
};
