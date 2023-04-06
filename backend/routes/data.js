const express = require('express');
const {
  setData,
  getData,
  getCounts,
  incCounts,
} = require('../controller/dataController');

const router = express.Router();

router.post('/setdata', setData);

router.get('/getdata', getData);

router.get('/getcount', getCounts);

router.post('/inccount', incCounts);

module.exports = router;
