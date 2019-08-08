const Group = require('../models/group');

module.exports = {
    getGroups,
    addGroup
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

async function addGroup({ name, devices }) {
    const newGroup = new Group({
        state: 'off',
        name,
        devices
    });

    await newGroup.save();
}