import { Injectable } from '@angular/core';
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenses: Expense[] = [];  // Store expenses in memory

  constructor() {}

  getExpenses(): Expense[] {
    return this.expenses;  // Return the in-memory expenses list
  }

  addExpense(expense: Expense): void {
    expense.id = new Date().getTime();  // Assign a unique ID
    this.expenses.push(expense);
  }

  deleteExpense(id: number): void {
    this.expenses = this.expenses.filter(exp => exp.id !== id);
  }
}
