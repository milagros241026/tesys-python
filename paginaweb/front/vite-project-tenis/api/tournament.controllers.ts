import { Request, Response, NextFunction } from 'express';
import * as tournamentService from '../services/tournament.service';

interface TournamentQueryParams {
  year?: string;
  surface?: string;
  category?: string;
}

interface TournamentParams {
  id: string;
}

// GET /api/tournaments
export const getAllTournaments = async (
  req: Request<{}, {}, {}, TournamentQueryParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { year, surface, category } = req.query;
    const tournaments = await tournamentService.getAllTournaments({ year, surface, category });
    res.status(200).json({ success: true, data: tournaments });
  } catch (error) {
    next(error);
  }
};

// GET /api/tournaments/:id
export const getTournamentById = async (
  req: Request<TournamentParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const tournament = await tournamentService.getTournamentById(id);

    if (!tournament) {
      res.status(404).json({ success: false, message: 'Tournament not found' });
      return;
    }

    res.status(200).json({ success: true, data: tournament });
  } catch (error) {
    next(error);
  }
};

// POST /api/tournaments
export const createTournament = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newTournament = await tournamentService.createTournament(req.body);
    res.status(201).json({ success: true, data: newTournament });
  } catch (error) {
    next(error);
  }
};

// PUT /api/tournaments/:id
export const updateTournament = async (
  req: Request<TournamentParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedTournament = await tournamentService.updateTournament(id, req.body);

    if (!updatedTournament) {
      res.status(404).json({ success: false, message: 'Tournament not found' });
      return;
    }

    res.status(200).json({ success: true, data: updatedTournament });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/tournaments/:id
export const deleteTournament = async (
  req: Request<TournamentParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await tournamentService.deleteTournament(id);

    if (!deleted) {
      res.status(404).json({ success: false, message: 'Tournament not found' });
      return;
    }

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

// GET /api/tournaments/:id/draw
export const getTournamentDraw = async (
  req: Request<TournamentParams>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const draw = await tournamentService.getTournamentDraw(id);

    if (!draw) {
      res.status(404).json({ success: false, message: 'Draw not found' });
      return;
    }

    res.status(200).json({ success: true, data: draw });
  } catch (error) {
    next(error);
  }
};