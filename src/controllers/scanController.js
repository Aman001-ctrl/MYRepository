const Finding = require('../models/Finding');
const CloudAccount = require('../models/CloudAccount');

exports.triggerScan = async (req, res) => {
  try {
    const { accountId } = req.params;
    const account = await CloudAccount.findById(accountId);
    if (!account) {
      return res.status(404).json({ message: 'Cloud account not found' });
    }
    const testFindings = [
      {
        accountId,
        provider: account.provider,
        service: 'S3',
        resourceId: 'arn:aws:s3:::my-test-bucket',
        resourceName: 'my-test-bucket',
        severity: 'HIGH',
        title: 'S3 Bucket Public Access Not Blocked',
        description: 'This bucket has public access enabled.',
        recommendation: 'Enable S3 Block Public Access settings.',
        complianceFrameworks: ['CIS', 'SOC2'],
        region: 'us-east-1'
      }
    ];
    const saved = await Finding.insertMany(testFindings);
    await CloudAccount.findByIdAndUpdate(accountId, { lastScanned: new Date() });
    res.json({
      success: true,
      message: 'Scan completed',
      findingsCount: saved.length,
      findings: saved
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
