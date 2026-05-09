const express = require('express');
const router = express.Router();
const protect = require('../middleware/auth');
const { triggerScan } = require('../controllers/scanController');

router.post('/:accountId', protect, triggerScan);

module.exports = router;
