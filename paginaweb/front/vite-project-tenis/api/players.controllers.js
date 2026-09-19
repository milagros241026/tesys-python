const playerService = require('../services/player.service');

// GET /api/players
exports.getAllPlayers = async (req, res, next) => {
  try {
    const { country, tour } = req.query;
    const players = await playerService.getAllPlayers({ country, tour });
    res.status(200).json({ success: true, data: players });
  } catch (error) {
    next(error);
  }
};

// GET /api/players/:id
exports.getPlayerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const player = await playerService.getPlayerById(id);

    if (!player) {
      return res.status(404).json({ success: false, message: 'Player not found' });
    }

    res.status(200).json({ success: true, data: player });
  } catch (error) {
    next(error);
  }
};

// POST /api/players
exports.createPlayer = async (req, res, next) => {
  try {
    const newPlayer = await playerService.createPlayer(req.body);
    res.status(201).json({ success: true, data: newPlayer });
  } catch (error) {
    next(error);
  }
};

// PUT /api/players/:id
exports.updatePlayer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedPlayer = await playerService.updatePlayer(id, req.body);

    if (!updatedPlayer) {
      return res.status(404).json({ success: false, message: 'Player not found' });
    }

    res.status(200).json({ success: true, data: updatedPlayer });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/players/:id
exports.deletePlayer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await playerService.deletePlayer(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Player not found' });
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

// GET /api/players/:id/matches
exports.getPlayerMatches = async (req, res, next) => {
  try {
    const { id } = req.params;
    const matches = await playerService.getPlayerMatches(id);
    res.status(200).json({ success: true, data: matches });
  } catch (error) {
    next(error);
  }
};