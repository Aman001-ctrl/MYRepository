const express = require('express');
const router = express.Router();
const Finding = require('../models/Finding');
const protect = require('../middleware/auth');

router.get('/stats', protect, async (req, res) => {
  try {
    const totalFindings = await Finding.countDocuments();
    const critical = await Finding.countDocuments({ severity: 'CRITICAL' });
    const high = await Finding.countDocuments({ severity: 'HIGH' });
    const medium = await Finding.countDocuments({ severity: 'MEDIUM' });
    const low = await Finding.countDocuments({ severity: 'LOW' });
    const open = await Finding.countDocuments({ status: 'OPEN' });
    const resolved = await Finding.countDocuments({ status: 'RESOLVED' });
    const recentFindings = await Finding.find().sort({ detectedAt: -1 }).limit(10);

    res.json({
      success: true,
      stats: {
        totalFindings,
        bySeverity: { CRITICAL: critical, HIGH: high, MEDIUM: medium, LOW: low },
        byStatus: { OPEN: open, RESOLVED: resolved }
      },
      recentFindings
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
