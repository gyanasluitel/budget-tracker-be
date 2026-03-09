import { BudgetItem, BudgetItemRequest } from "../interfaces/budgetTracker";
import { budgetItems } from "../models/budgetItem";

export const create = async (data: BudgetItemRequest) => {
    const dataToCreate: BudgetItem = {
        id: crypto.randomUUID(),
        description: data.description,
        amount: data.amount,
        category: data.category,
        date: data.date
    }

    budgetItems.push(dataToCreate);

    console.log(budgetItems);

    return dataToCreate;
}

export const fetchAll = async (req: any) => {
    const { category } = req;

    if (category) {
        return budgetItems.filter(item => item.category === category);
    }
    
    return budgetItems;
}


interface NotFoundError {
    message: string;
    status: number;
}

export const fetchById = async (id: string) => {
    const item = budgetItems.find(item => item.id === id);

    if (!item) {
        const notFoundError: NotFoundError = {
            message: "Item not found",
            status: 404
        }

        throw notFoundError;
    }

    return item;
}