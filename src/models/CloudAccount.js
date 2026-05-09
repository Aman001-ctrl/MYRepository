const mongoose = require('mongoose');
const CloudAccountSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  provider: { type: String, enum: ['aws', 'azure', 'gcp'], required: true },
  credentials: {
    accessKeyId: String,
    secretAccessKey: String,
    region: { type: String, default: 'us-east-1' }
  },
  status: { type: String, enum: ['active', 'inactive', 'error'], default: 'active' },
  lastScanned: Date,
  totalFindings: { type: Number, default: 0 }
}, { timestamps: true });
module.exports = mongoose.model('CloudAccount', CloudAccountSchema);
