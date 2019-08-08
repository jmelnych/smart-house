const mongoose = require('mongoose');

const Log = mongoose.model('Log', {
  device_id: String,
  action: String,
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = Log;
