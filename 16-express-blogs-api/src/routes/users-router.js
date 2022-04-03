const express = require('express');
const inicative = require('indicative');
const sendErrorResponse = require('../utils/utils').sendErrorResponse;
const replace_id = require('../utils/utils').replace_id;
const ObjectId = require('mongodb').ObjectId;


const router = express.Router();

// Users Router
router.get('/', async (req, res) => {

})

module.exports = router // default export 
