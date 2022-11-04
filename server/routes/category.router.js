const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/:catName', (req, res) => {

 console.log('Router', req.params.catName ) 
  // return all categories

  const queryText = `SELECT "url", "category"."name"
                      FROM "favorites"
                      JOIN "category"
                      ON "favorites"."categoyry_id" = "category"."id"
                      WHERE "category"."name" = $1;`;


  pool
    .query(queryText, [req.params.catName])
    .then((result) => {
      res.send(result.rows);
      console.log('server', result.rows)
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

module.exports = router;
