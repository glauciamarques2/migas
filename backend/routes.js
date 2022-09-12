const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const API_URL = 'https://migalabs.es/api/v1';

router.get('/client-distribution', async (req, res) => {
    const response = await fetch(API_URL + "/client-distribution?crawler=eth-cl-mainnet");
    const data = await response.json();
    res.status(200).json(data);
});


router.get('/geo-distribution', async (req, res) => {
    const response = await fetch(API_URL + "/geo-distribution?crawler=eth-cl-mainnet");
    const data = await response.json();
    res.status(200).json(data);
});

router.get('/ip-distribution', async (req, res) => {
    const response = await fetch(API_URL + "/ip-distribution?crawler=eth-cl-mainnet");
    const data = await response.json();
    res.status(200).json(data);
});

router.get('/rtt-distribution', async (req, res) => {
    const response = await fetch(API_URL + "/rtt-distribution?crawler=eth-cl-mainnet");
    const data = await response.json();
    res.status(200).json(data);
});

module.exports = router;