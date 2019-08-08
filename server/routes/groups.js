const express = require('express');
const groupsService = require('../services/groups');

const router = express.Router();

router.get('/', async (req, res) => {
    const groups = await groupsService.getGroups();
    res.json(groups);
});

router.post('/', async (req, res) => {
    const { name, devices } = req.body;
    await groupsService.addGroup({
        name,
        devices
    });

    res.sendStatus(201);
});

module.exports = router;