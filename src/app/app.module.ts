import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ExpenseService } from './services/expense.service';

// Define routes in a separate variable
const appRoutes: Routes = [
  { path: '', redirectTo: 'add-expense', pathMatch: 'full' },
  { path: 'add-expense', component: AddExpenseComponent },
  { path: 'expense-list', component: ExpenseListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AddExpenseComponent,
    ExpenseListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) // Use the routes here
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
