const Log = require('../models/log');

module.exports = {
  getLogsByDeviceId,
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

async function getLogsByDeviceId(deviceId) {
  const deviceLogs = await Log.find({ device_id: deviceId}).exec();
  return deviceLogs.map(logAdapter);
}

async function addDeviceLog(deviceId, action) {
  const newLog = new Log({
    device_id: deviceId,
    action
  });
  newLog.save();
}

