const rankingService = require('../services/ranking.service');

// GET /api/rankings?type=atp|wta&date=YYYY-MM-DD
exports.getRankings = async (req, res, next) => {
  try {
    const { type = 'atp', date, limit = 100 } = req.query;

    if (!['atp', 'wta'].includes(type.toLowerCase())) {
      return res.status(400).json({
        success: false,
        message: "type must be 'atp' or 'wta'",
      });
    }

    const rankings = await rankingService.getRankings({ type, date, limit: Number(limit) });
    res.status(200).json({ success: true, data: rankings });
  } catch (error) {
    next(error);
  }
};

// GET /api/rankings/player/:id
exports.getPlayerRankingHistory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { type = 'atp' } = req.query;

    const history = await rankingService.getPlayerRankingHistory(id, type);

    if (!history) {
      return res.status(404).json({ success: false, message: 'Ranking history not found' });
    }

    res.status(200).json({ success: true, data: history });
  } catch (error) {
    next(error);
  }
};

// POST /api/rankings (bulk insert/update, e.g. weekly ranking refresh)
exports.updateRankings = async (req, res, next) => {
  try {
    const { type, rankings } = req.body;

    if (!type || !Array.isArray(rankings)) {
      return res.status(400).json({
        success: false,
        message: 'type and rankings[] are required',
      });
    }

    const result = await rankingService.updateRankings(type, rankings);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};