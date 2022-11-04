const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios')


const router = express.Router();

const list = [{
    url: 'https://media0.giphy.com/media/hb2zYRKYY8vLy/giphy.gif?cid=4811bb4bpr2xjatxak7typcninkh8wmatjlnp7gox66nfoql&rid=giphy.gif&ct=g'
},{
    url:'https://media0.giphy.com/media/hb2zYRKYY8vLy/giphy.gif?cid=4811bb4bpr2xjatxak7typcninkh8wmatjlnp7gox66nfoql&rid=giphy.gif&ct=g'
}]

// return all giphy results
// router.get('/', (req, res) => {

//     res.sendStatus(list);
// });

router.get('/:param', (req, res) => {

    console.log('param is:', req.params.param);
    const searchTerm = req.params.param
    axios({
        method: 'GET',
        url: 'https://api.giphy.com/v1/gifs/search',
        params: {
            api_key: process.env.GIPHY_API_KEY,
            q: searchTerm,
            limit: 1
        }
    })
        .then((apiRes) => {
            // send back the data from giphy
            console.log('APIRES:',apiRes.data.data.images.fixed_height.url)
            res.send(apiRes.data.data.images.fixed_height.url);

            // You can send back your own custom object, too!
            // res.send({
            //     goodUrlToUse: apiRes.data.url
            // })
        })
        .catch((err) => {
            console.error('API req failed', err);
            res.sendStatus(500);
        });
});

module.exports = router;