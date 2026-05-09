const scan = async (credentials) => {
  return [
    {
      service: 'EC2',
      resourceId: 'sg-12345678',
      resourceName: 'default-security-group',
      severity: 'MEDIUM',
      title: 'Security Group Allows Unrestricted SSH Access',
      description: 'Security group allows SSH access from 0.0.0.0/0.',
      recommendation: 'Restrict SSH access to specific IP ranges.',
      complianceFrameworks: ['CIS'],
      region: 'us-east-1'
    }
  ];
};
module.exports = { scan };
