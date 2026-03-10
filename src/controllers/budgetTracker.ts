import { Request, Response, NextFunction } from "express" 
import * as budgetTrackerService from "../services/budgetTracker";

export const fetchAll = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const response = await budgetTrackerService.fetchAll(req.query);

        res.status(200).json({
            data: response
        })
    }
    catch (error) {
        next(error);
    }
}

export const create = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const requestBody = req.body;

        const data = await budgetTrackerService.create(requestBody);
        // Core logic
        res.status(201).json({
            data
        });
    }
    catch (error) {
        next(error);
    }
}

export const fetchById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = req.params.id;

        const data = await budgetTrackerService.fetchById(String(id));

        res.status(200).json({
            data
        })
    }
    catch (error) {
        next(error);

    }
}