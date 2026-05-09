const scan = async (credentials) => {
  return [
    {
      service: 'IAM',
      resourceId: 'arn:aws:iam::123456789:root',
      resourceName: 'root-account',
      severity: 'CRITICAL',
      title: 'Root Account Has Active Access Keys',
      description: 'Root account has active access keys which is a security risk.',
      recommendation: 'Delete root account access keys immediately.',
      complianceFrameworks: ['CIS', 'SOC2'],
      region: 'global'
    }
  ];
};
module.exports = { scan };
