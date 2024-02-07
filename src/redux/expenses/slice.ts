import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ExpenseId = number

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

const initialState: Expense[] = [
  {
    id: 1,
    name: "Office Supplies",
    justification: "Purchase of pens, notebooks, and other stationery items.",
    receiptUrl: "https://example.com/receipts/expense1",
    quantity: 10,
    unitPrice: 2.5,
    totalPrice: 25000,
    date: "2023-01-15",
    userId: 101,
    expenseTypeId: 3
  },

];

export const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    
    /* Store Expense */
    storeAllExpenses: (state, action: PayloadAction<Expense[]>) => {  
      // return [...state, ...action.payload];
      return action.payload;
    },

        
    /* Store Expense */
    storeExpense: (state, action: PayloadAction<Expense>) => {      
      return [ ...state, { ...action.payload} ]
    },

    /* Update Expense */
    updateExpense: (state, action) => {

    },

    /* Show Expense */
    showExpense: (state, action: PayloadAction<ExpenseId>) => {
        const id = action.payload;
        return state.filter((expense) => expense.id === id);
    },

    /* Destroy Expense */
    destroyExpense: (state, action) => {

    },

    /* Delete Expense By Id */
    deleteExpenseById: (state, action: PayloadAction<ExpenseId>) => {
      const id = action.payload;
      return state.filter((expense) => expense.id != id);
    }

  }
});

export default expenseSlice.reducer;

export const { storeExpense, updateExpense, showExpense, destroyExpense, deleteExpenseById, storeAllExpenses } =  expenseSlice.actions;
