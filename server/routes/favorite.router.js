const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// GET (return) favorite images
router.get('/', (req, res) => {
  const queryText = 'SELECT id, url, categoyry_id FROM favorites ORDER BY id;';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT favorites query', err);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(200);
});

// UPDATE given favorite with a category id
router.put('/:favId', (req, res) => {
  console.log('category is', req.body.data);
  console.log('favId is:', req.params.favId);
  // req.body should contain a category_id to add to this favorite image
  const category = req.body.data;
  const favoriteId = req.params.favId;

  const sqlText = `UPDATE "favorites" SET "categoyry_id" = $1 WHERE "id" = $2;`;
  // UPDATE "favorites" SET "categoyry_id" = 1 WHERE "id" = 6;

  pool.query(sqlText, [category, favoriteId])
    .then((databaseResult) => {
      // okay
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('error updating favorite item', error);
      res.sendStatus(500);
    })
  // res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
