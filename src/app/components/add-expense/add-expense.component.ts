import { Component } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {
  expense: Expense = { id: 0, date: '', category: '', amount: 0, description: '' };

  constructor(private expenseService: ExpenseService) {}

  addExpense() {
    if (this.expense.date && this.expense.category && this.expense.amount) {
      this.expenseService.addExpense(this.expense);
      this.expense = { id: 0, date: '', category: '', amount: 0, description: '' }; // Reset Form
    }
  }
}
