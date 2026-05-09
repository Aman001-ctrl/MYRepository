const express = require('express');
const router = express.Router();
const Finding = require('../models/Finding');
const protect = require('../middleware/auth');

router.get('/', protect, async (req, res) => {
  try {
    const findings = await Finding.find().sort({ detectedAt: -1 }).limit(100);
    res.json({ success: true, findings });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch('/:id/status', protect, async (req, res) => {
  try {
    const finding = await Finding.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json({ success: true, finding });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
