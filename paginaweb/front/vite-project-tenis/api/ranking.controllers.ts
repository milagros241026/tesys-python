import { Request, Response, NextFunction } from 'express';
import * as rankingService from '../services/ranking.service';

type RankingType = 'atp' | 'wta';

interface RankingsQueryParams {
  type?: string;
  date?: string;
  limit?: string;
}

interface PlayerRankingParams {
  id: string;
}

interface PlayerRankingQuery {
  type?: string;
}

interface RankingEntry {
  playerId: string;
  position: number;
  points: number;
}

interface UpdateRankingsBody {
  type: RankingType;
  rankings: RankingEntry[];
}

// GET /api/rankings?type=atp|wta&date=YYYY-MM-DD
export const getRankings = async (
  req: Request<{}, {}, {}, RankingsQueryParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { type = 'atp', date, limit = '100' } = req.query;

    if (!['atp', 'wta'].includes(type.toLowerCase())) {
      res.status(400).json({
        success: false,
        message: "type must be 'atp' or 'wta'",
      });
      return;
    }

    const rankings = await rankingService.getRankings({
      type: type.toLowerCase() as RankingType,
      date,
      limit: Number(limit),
    });

    res.status(200).json({ success: true, data: rankings });
  } catch (error) {
    next(error);
  }
};

// GET /api/rankings/player/:id
export const getPlayerRankingHistory = async (
  req: Request<PlayerRankingParams, {}, {}, PlayerRankingQuery>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { type = 'atp' } = req.query;

    const history = await rankingService.getPlayerRankingHistory(id, type);

    if (!history) {
      res.status(404).json({ success: false, message: 'Ranking history not found' });
      return;
    }

    res.status(200).json({ success: true, data: history });
  } catch (error) {
    next(error);
  }
};

// POST /api/rankings (bulk insert/update, e.g. weekly ranking refresh)
export const updateRankings = async (
  req: Request<{}, {}, UpdateRankingsBody>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { type, rankings } = req.body;

    if (!type || !Array.isArray(rankings)) {
      res.status(400).json({
        success: false,
        message: 'type and rankings[] are required',
      });
      return;
    }

    const result = await rankingService.updateRankings(type, rankings);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    next(error);
  }
};