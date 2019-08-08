const express = require('express');
const groupsService = require('../services/groups');

const router = express.Router();

router.get('/', async (req, res) => {
    const groups = await groupsService.getGroups();
    res.json(groups);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const group = await groupsService.getGroupById(id);
    res.json(group);
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const groupData = req.body;
    try {
        await groupsService.updateGroup(id, groupData);
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/', async (req, res) => {
    const { name, devices } = req.body;
    await groupsService.addGroup({
        name,
        devices
    });

    res.sendStatus(201);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await groupsService.removeGroup(id);
    res.sendStatus(200);
})

module.exports = router;