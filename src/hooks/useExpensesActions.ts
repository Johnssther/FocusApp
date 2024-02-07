import { Expense, deleteExpenseById, storeExpense, storeAllExpenses } from '../redux/expenses/slice';
import { useAppDispatch, useAppSelector } from './store';

export const useExpensesActions = () => {
  const dispatch = useAppDispatch();

  const storeAllHandleExpenses = async (expenses: Expense[]) => {    
    await dispatch( storeAllExpenses(expenses) )
  };

  
  /* Store Expense  */
  const storeHandleExpense = async (expense: Expense) => {    
    await dispatch( storeExpense(expense) )
  };

  /* Update Expense  */
  const updateExpense = async (id:number) => {
    // pass...
  };

  /* Delete Expense  */
  const removeExpense = async (id:number) => {
    await dispatch( deleteExpenseById(id) )
  };
  
  return { storeHandleExpense, updateExpense, removeExpense, storeAllHandleExpenses }
}
