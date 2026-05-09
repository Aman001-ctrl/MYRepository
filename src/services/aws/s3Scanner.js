const scan = async (credentials) => {
  return [
    {
      service: 'S3',
      resourceId: 'arn:aws:s3:::example-bucket',
      resourceName: 'example-bucket',
      severity: 'HIGH',
      title: 'S3 Bucket Public Access Not Blocked',
      description: 'Bucket has public access enabled.',
      recommendation: 'Enable S3 Block Public Access settings.',
      complianceFrameworks: ['CIS', 'SOC2'],
      region: 'us-east-1'
    }
  ];
};
module.exports = { scan };
