const Device = require('../models/device');
const sendRequest = require('../utils/request') ;

module.exports = {
  getDevices,
  getDeviceById,
  addDevice,
  removeDevice,
  updateDevice,
};



function deviceAdapter(device) {
  const { _id, name ,address, port, state } = device;
  return {
    id: _id,
    name,
    address,
    port,
    state
  }
}

async function getDevices() {
  const devices = await Device.find({}).exec();
  return devices.map(deviceAdapter);
}

async function getDeviceById(deviceId) {
  const device = await Device.findById(deviceId).exec();
  if (device) {
    return deviceAdapter(device);
  } else {
    return null;
  }
}

async function addDevice(device) {
  const newDevice = new Device({
    state: 'off',
    ...device
  });
  newDevice.save();
}

async function removeDevice(deviceId) {
  await Device.findByIdAndDelete(deviceId).exec();
}

async function updateDevice(deviceId, data) {
  const device = await Device.findById(deviceId).exec();
  if (!device) {
    return null;
  }

  /* updating state of bulbs
  if (data.state) {
    await updateDeviceState(
      device.address,
      device.port,
      data.state
    )
  }
  */
    await Device.findByIdAndUpdate(deviceId, data).exec();
}

async function updateDeviceState(address, port, state) {
  const command = state === 'off'
    ? 'Power off'
    : 'Power On';

  const url = `http://${address}:${port}/cm?cmnd=${command}`;
  await sendRequest(url);
}
