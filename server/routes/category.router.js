const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();
console.log('Router')
router.get('/', (req, res) => {
  
  // return all categories
  const queryText = `SELECT "url"
                      FROM "favorites"
                      JOIN "category"
                      ON "favorites"."categoyry_id" = "category"."id"
                      WHERE "category"."name" = 'meme';`;


  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
