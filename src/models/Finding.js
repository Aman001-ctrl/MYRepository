const mongoose = require('mongoose');
const FindingSchema = new mongoose.Schema({
  accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'CloudAccount', required: true },
  provider: { type: String, enum: ['aws', 'azure', 'gcp'], required: true },
  service: { type: String, required: true },
  resourceId: { type: String, required: true },
  resourceName: String,
  severity: { type: String, enum: ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW', 'INFO'], required: true },
  title: { type: String, required: true },
  description: String,
  recommendation: String,
  status: { type: String, enum: ['OPEN', 'RESOLVED', 'SUPPRESSED'], default: 'OPEN' },
  complianceFrameworks: [String],
  region: String,
  detectedAt: { type: Date, default: Date.now },
  resolvedAt: Date
}, { timestamps: true });
module.exports = mongoose.model('Finding', FindingSchema);
