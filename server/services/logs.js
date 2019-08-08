const Log = require('../models/log');
const sendRequest = require('../utils/request');

module.exports = {
  getLogs,
  getLogByDeviceId,
  addDeviceLog
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

async function getLogs() {
  const logs = await Log.find({}).exec();
  return logAdapter(logs);
}

async function getLogByDeviceId(id) {
  const log = await Log.findById(id).exec();
  if (log) {
    return logAdapter(log);
  } else {
    return null;
  }
}

async function addDeviceLog(deviceId, action) {
  const newLog = new Log({
    device_id: deviceId,
    action
  });
  newLog.save();
}

