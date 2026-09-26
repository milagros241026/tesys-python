
import { Request, Response, NextFunction } from 'express';
import * as playerService from '../services/player.service';

interface PlayerQueryParams {
  country?: string;
  tour?: string;
}

interface PlayerParams {
  id: string;
}

// GET /api/players
export const getAllPlayers = async (
  req: Request<{}, {}, {}, PlayerQueryParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { country, tour } = req.query;
    const players = await playerService.getAllPlayers({ country, tour });
    res.status(200).json({ success: true, data: players });
  } catch (error) {
    next(error);
  }
};

// GET /api/players/:id
export const getPlayerById = async (
  req: Request<PlayerParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const player = await playerService.getPlayerById(id);

    if (!player) {
      res.status(404).json({ success: false, message: 'Player not found' });
      return;
    }

    res.status(200).json({ success: true, data: player });
  } catch (error) {
    next(error);
  }
};

// POST /api/players
export const createPlayer = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newPlayer = await playerService.createPlayer(req.body);
    res.status(201).json({ success: true, data: newPlayer });
  } catch (error) {
    next(error);
  }
};

// PUT /api/players/:id
export const updatePlayer = async (
  req: Request<PlayerParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedPlayer = await playerService.updatePlayer(id, req.body);

    if (!updatedPlayer) {
      res.status(404).json({ success: false, message: 'Player not found' });
      return;
    }

    res.status(200).json({ success: true, data: updatedPlayer });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/players/:id
export const deletePlayer = async (
  req: Request<PlayerParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await playerService.deletePlayer(id);

    if (!deleted) {
      res.status(404).json({ success: false, message: 'Player not found' });
      return;
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

// GET /api/players/:id/matches
export const getPlayerMatches = async (
  req: Request<PlayerParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const matches = await playerService.getPlayerMatches(id);
    res.status(200).json({ success: true, data: matches });
  } catch (error) {
    next(error);
  }
};