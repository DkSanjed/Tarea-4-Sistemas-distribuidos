const express = require('express');
const router = express.Router();
var cors = require('cors')
router.use(cors())
router.use(express.json())

module.exports = router