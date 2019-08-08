import axios from 'axios';

const API_URL = 'http://localhost:4000';

export async function getDevices() {
    const response = await axios.get(`${API_URL}/devices`);
    return response.data;
}

export async function getDeviceById(deviceId) {
  const response = await axios.get(`${API_URL}/devices/${deviceId}`);
  return response.data;
}

export async function addDevice(device) {
  const response = await axios.post(`${API_URL}/devices`, device);
  return response.data;
}

export async function removeDevice(deviceId) {
  const response = await axios.delete(`${API_URL}/devices/${deviceId}`);
  return response.data;
}

export async function updateDevice(deviceId, data) {
  await axios.patch(`${API_URL}/devices/${deviceId}`, data);
}

export async function switchOn(deviceId) {
    await updateDevice(deviceId, {
        state: 'on'
    });
}

export async function switchOff(deviceId) {
    await updateDevice(deviceId, {
        state: 'off'
    });
}

export async function getDeviceLog(deviceId) {
  const response = await axios.get(`${API_URL}/log/devices/${deviceId}`);
  return response.data;
}
