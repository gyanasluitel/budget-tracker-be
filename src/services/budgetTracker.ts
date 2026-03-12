import { BudgetItem, BudgetItemRequest } from "../interfaces/budgetTracker";
import BudgetItemModel from "../models/budgetItem";

export const create = async (data: BudgetItemRequest) => {
    return await BudgetItemModel.create(data);
}

export const fetchAll = async () => {
    return await BudgetItemModel.find();
}


interface NotFoundError {
    message: string;
    status: number;
}

export const fetchById = async (id: string) => {
    return await BudgetItemModel.findById(id);
}