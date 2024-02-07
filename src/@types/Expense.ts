type ExpenseId = number

// export interface Expense {
//     id: ExpenseId,
//     name: string | null,
//     justification?: string | null,
//     receiptUrl?: string | null,
//     quantity: number | null,
//     unitPrice: number | null,
//     totalPrice: number | null,
//     date: string | null,
//     userId?: number | null,
//     expenseTypeId?: number | null,
//     photos?: string[] | null, 
// }

export interface Expense {
    id: ExpenseId,
    name: string,
    justification: string,
    receiptUrl: string,
    quantity: number,
    unitPrice: number,
    totalPrice: number,
    date: string,
    userId: number,
    expenseTypeId: number
}