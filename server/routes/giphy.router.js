const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    axios({
        method: 'GET',
        url: 'https://api.giphy.com/v1/gifs/search',
        params: {
            api_key:process.env.GIPHI_API_KEY,
            q:req.body
        }
    })
    .then((resAPI)=>{
        res.send(resAPI.data);
    })
    .catch((err)=>{
        console.error('error in search router axios GET',err);
        res.sendStatus(500);
    })
})

module.exports = router;