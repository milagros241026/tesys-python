const matchService = require('../services/match.service');

// GET /api/matches
exports.getAllMatches = async (req, res, next) => {
  try {
    const { player, tournament, surface, status } = req.query;
    const matches = await matchService.getAllMatches({ player, tournament, surface, status });
    res.status(200).json({ success: true, data: matches });
  } catch (error) {
    next(error);
  }
};

// GET /api/matches/:id
exports.getMatchById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const match = await matchService.getMatchById(id);

    if (!match) {
      return res.status(404).json({ success: false, message: 'Match not found' });
    }

    res.status(200).json({ success: true, data: match });
  } catch (error) {
    next(error);
  }
};

// POST /api/matches
exports.createMatch = async (req, res, next) => {
  try {
    const newMatch = await matchService.createMatch(req.body);
    res.status(201).json({ success: true, data: newMatch });
  } catch (error) {
    next(error);
  }
};

// PUT /api/matches/:id
exports.updateMatch = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedMatch = await matchService.updateMatch(id, req.body);

    if (!updatedMatch) {
      return res.status(404).json({ success: false, message: 'Match not found' });
    }

    res.status(200).json({ success: true, data: updatedMatch });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/matches/:id
exports.deleteMatch = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await matchService.deleteMatch(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Match not found' });
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

// GET /api/matches/h2h?player1=X&player2=Y
exports.getHeadToHead = async (req, res, next) => {
  try {
    const { player1, player2 } = req.query;

    if (!player1 || !player2) {
      return res.status(400).json({
        success: false,
        message: 'player1 and player2 query params are required',
      });
    }

    const h2h = await matchService.getHeadToHead(player1, player2);
    res.status(200).json({ success: true, data: h2h });
  } catch (error) {
    next(error);
  }
};