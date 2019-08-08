const Group = require('../models/group');
const devicesService = require('./devices');

module.exports = {
    getGroups,
    addGroup,
    getGroupById,
    updateGroup,
    removeGroup
};

function groupAdapter(group) {
    const { _id, name, state, devices } = group;
    return {
        id: _id,
        name,
        state,
        devices
    }
}

async function getGroups() {
    const groups = await Group.find({}).exec();
    return groups.map(groupAdapter);
};

async function addGroup({name, devices}) {
    const newGroup = new Group({
        state: 'off',
        name,
        devices
    });

    await newGroup.save();
}

async function getGroupById(id) {
    const group = await Group.findById(id).exec();
    if (group) {
        return groupAdapter(group);
    } else {
        return null;
    }
}

async function updateGroup(groupId, data) {
    const group = await Group.findById(groupId).exec();
    if (!group) {
        return null;
    }
    await Group.findByIdAndUpdate(groupId, data).exec();
    Group.findByIdAndUpdate(groupId, data).exec();
    await group.devices.map(async deviceId => await devicesService.updateDevice(deviceId, {state: data.state}));
}

async function removeGroup(groupId) {
    await Group.findByIdAndDelete(groupId).exec();
}
