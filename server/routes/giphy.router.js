const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:q', (req, res) => {
    //TODO: this is where I am, what is in the req.body, I NEED IT TO BE THE QUERY STRING
    //console.log('req body',req.body);
    axios({
        method: 'GET',
        url: 'https://api.giphy.com/v1/gifs/search',
        params: {
            api_key:process.env.GIPHI_API_KEY,
            q: req.params.q
        }
    })
    .then((resAPI)=>{
        res.send(resAPI.data);
    })
    .catch((err)=>{
        console.error('error in search router axios GET',err);
        res.sendStatus(500);
    })
    
    // res.send("what is the params");
})

module.exports = router;