using System;
using System.Collections.Generic;
using ExpenseRecord.Models;

namespace ExpenseRecord.Services
{
    public interface IExpenseService
    {
        IEnumerable<Expense> GetAllExpenses();
        Expense AddExpense(Expense expense);
        Expense DeleteExpense(int Id);
        Expense UpdateExpense(int Id, Expense expense);
    }
}
