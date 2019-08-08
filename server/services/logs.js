const Log = require('../models/log');
const sendRequest = require('../utils/request');

module.exports = {
  getLogByDeviceId
};

function logAdapter(log) {
  const { _id, device_id, action, date } = log;
  return {
    id: _id,
    device_id,
    action,
    date,
  }
}

  async function getLogByDeviceId(id) {
    const log = await Log.findById(id).exec();
    if (log) {
      return logAdapter(log);
    } else {
      return null;
    }
  }

