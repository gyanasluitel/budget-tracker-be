import { z } from "zod";

export const createBudgetItemSchema = z.object({
    description: z.string().min(3),
    amount: z.number().min(1),
    date: z.string().min(10),
    category: z.enum(["Income", "Expense"])
})

export const fetchByIdSchema = z.object({
    id: z.string().min(5)
})


export const fetchAll = z.object({
    category: z.enum(["Income", "Expense"]).optional()
})