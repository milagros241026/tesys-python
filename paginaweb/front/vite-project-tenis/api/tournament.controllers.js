const tournamentService = require('../services/tournament.service');

// GET /api/tournaments
exports.getAllTournaments = async (req, res, next) => {
  try {
    const { year, surface, category } = req.query;
    const tournaments = await tournamentService.getAllTournaments({ year, surface, category });
    res.status(200).json({ success: true, data: tournaments });
  } catch (error) {
    next(error);
  }
};

// GET /api/tournaments/:id
exports.getTournamentById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tournament = await tournamentService.getTournamentById(id);

    if (!tournament) {
      return res.status(404).json({ success: false, message: 'Tournament not found' });
    }

    res.status(200).json({ success: true, data: tournament });
  } catch (error) {
    next(error);
  }
};

// POST /api/tournaments
exports.createTournament = async (req, res, next) => {
  try {
    const newTournament = await tournamentService.createTournament(req.body);
    res.status(201).json({ success: true, data: newTournament });
  } catch (error) {
    next(error);
  }
};

// PUT /api/tournaments/:id
exports.updateTournament = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedTournament = await tournamentService.updateTournament(id, req.body);

    if (!updatedTournament) {
      return res.status(404).json({ success: false, message: 'Tournament not found' });
    }

    res.status(200).json({ success: true, data: updatedTournament });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/tournaments/:id
exports.deleteTournament = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await tournamentService.deleteTournament(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: 'Tournament not found' });
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

// GET /api/tournaments/:id/draw
exports.getTournamentDraw = async (req, res, next) => {
  try {
    const { id } = req.params;
    const draw = await tournamentService.getTournamentDraw(id);

    if (!draw) {
      return res.status(404).json({ success: false, message: 'Draw not found' });
    }

    res.status(200).json({ success: true, data: draw });
  } catch (error) {
    next(error);
  }
};