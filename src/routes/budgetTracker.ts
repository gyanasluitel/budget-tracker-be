import { Router } from "express";
import * as budgetTrackerController from "../controllers/budgetTracker";
import { validateParams, validateQueryParams, validateRequestBody } from "../middlewares/validator";
import { createBudgetItemSchema, fetchAll, fetchByIdSchema } from "../schemas/budgetTracker";

const router = Router();

router.get("/", budgetTrackerController.fetchAll)

router.post("/", validateRequestBody(createBudgetItemSchema), budgetTrackerController.create);

router.get("/:id", validateParams(fetchByIdSchema), budgetTrackerController.fetchById);

export default router;