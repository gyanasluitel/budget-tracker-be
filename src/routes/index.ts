import { Router } from "express";
import budgetTrackerRoutes from "./budgetTracker";

const router = Router();

router.use("/budgetTracker", budgetTrackerRoutes);

export default router;