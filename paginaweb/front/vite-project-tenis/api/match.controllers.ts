import { Request, Response, NextFunction } from 'express';
import * as matchService from '../services/match.service';

interface MatchQueryParams {
  player?: string;
  tournament?: string;
  surface?: string;
  status?: string;
}

interface MatchParams {
  id: string;
}

interface HeadToHeadQuery {
  player1?: string;
  player2?: string;
}

// GET /api/matches
export const getAllMatches = async (
  req: Request<{}, {}, {}, MatchQueryParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { player, tournament, surface, status } = req.query;
    const matches = await matchService.getAllMatches({ player, tournament, surface, status });
    res.status(200).json({ success: true, data: matches });
  } catch (error) {
    next(error);
  }
};

// GET /api/matches/:id
export const getMatchById = async (
  req: Request<MatchParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const match = await matchService.getMatchById(id);

    if (!match) {
      res.status(404).json({ success: false, message: 'Match not found' });
      return;
    }

    res.status(200).json({ success: true, data: match });
  } catch (error) {
    next(error);
  }
};

// POST /api/matches
export const createMatch = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newMatch = await matchService.createMatch(req.body);
    res.status(201).json({ success: true, data: newMatch });
  } catch (error) {
    next(error);
  }
};

// PUT /api/matches/:id
export const updateMatch = async (
  req: Request<MatchParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedMatch = await matchService.updateMatch(id, req.body);

    if (!updatedMatch) {
      res.status(404).json({ success: false, message: 'Match not found' });
      return;
    }

    res.status(200).json({ success: true, data: updatedMatch });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/matches/:id
export const deleteMatch = async (
  req: Request<MatchParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await matchService.deleteMatch(id);

    if (!deleted) {
      res.status(404).json({ success: false, message: 'Match not found' });
      return;
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

// GET /api/matches/h2h?player1=X&player2=Y
export const getHeadToHead = async (
  req: Request<{}, {}, {}, HeadToHeadQuery>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { player1, player2 } = req.query;

    if (!player1 || !player2) {
      res.status(400).json({
        success: false,
        message: 'player1 and player2 query params are required',
      });
      return;
    }

    const h2h = await matchService.getHeadToHead(player1, player2);
    res.status(200).json({ success: true, data: h2h });
  } catch (error) {
    next(error);
  }
};