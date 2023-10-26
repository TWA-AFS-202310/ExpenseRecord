using System;
using System.Collections.Generic;
using System.Linq;
using ExpenseRecord.Models;

namespace ExpenseRecord.Services
{
    public class ExpenseService : IExpenseService
    {
        private readonly List<Expense> _expenses = new List<Expense>();

        public IEnumerable<Expense> GetAllExpenses()
        {
            return _expenses;
        }

        public Expense AddExpense(Expense expense)
        {
            if (expense.Id == 0)
            {
                expense.Id = new Random().Next(1, int.MaxValue);
            }
            _expenses.Insert(0, expense);
            return expense;
        }

        public Expense DeleteExpense(int Id)
        {
            var expense = _expenses.FirstOrDefault(e => e.Id == Id);
            if (expense != null)
            {
                _expenses.Remove(expense);
            }
            return expense;
        }

        public Expense UpdateExpense(int Id, Expense expense)
        {
            var oldExpense = _expenses.FirstOrDefault(e => e.Id == Id);
            if (oldExpense != null)
            {
                oldExpense.Description = expense.Description;
                oldExpense.Type = expense.Type;
                oldExpense.Amount = expense.Amount;
                oldExpense.Date = expense.Date;
            }
            return oldExpense;
        }
    }
}
