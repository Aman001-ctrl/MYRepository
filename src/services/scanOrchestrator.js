const Finding = require('../models/Finding');

const runScan = async (account) => {
  const findings = [];
  findings.push({
    accountId: account._id,
    provider: account.provider,
    service: 'S3',
    resourceId: 'arn:aws:s3:::example-bucket',
    resourceName: 'example-bucket',
    severity: 'HIGH',
    title: 'S3 Bucket Public Access Not Blocked',
    description: 'Bucket has public access enabled.',
    recommendation: 'Enable S3 Block Public Access.',
    complianceFrameworks: ['CIS', 'SOC2'],
    region: 'us-east-1'
  });
  return findings;
};

module.exports = { runScan };
