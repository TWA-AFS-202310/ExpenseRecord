using System;
using System.Collections.Generic;
using System.Linq;
using ExpenseRecord.Models;

namespace ExpenseRecord.Services
{
    public class ExpenseService : IExpenseService
    {
        private readonly List<Expense> _expenses = new List<Expense>();

        // 初始化数据
        public ExpenseService()
        {
            _expenses.Add(new Expense
            {
                Id = 1,
                Description = "Shopping",
                Type = "Expense",
                Amount = 20.00,
                Date = DateTime.Parse("2021-01-01"),
                CreatedTime = DateTime.Parse("2021-01-01"),
                UpdatedTime = DateTime.Parse("2021-01-01")
            });
            _expenses.Add(new Expense
            {
                Id = 2,
                Description = "Salary",
                Type = "Income",
                Amount = 100.00,
                Date = DateTime.Parse("2021-01-02"),
                CreatedTime = DateTime.Parse("2021-01-02"),
                UpdatedTime = DateTime.Parse("2021-01-02")
            });
            _expenses.Add(new Expense
            {
                Id = 3,
                Description = "Transportation",
                Type = "Expense",
                Amount = 10.00,
                Date = DateTime.Parse("2021-01-03"),
                CreatedTime = DateTime.Parse("2021-01-03"),
                UpdatedTime = DateTime.Parse("2021-01-03")
            });
            _expenses.Add(new Expense
            {
                Id = 4,
                Description = "Food",
                Type = "Expense",
                Amount = 15.00,
                Date = DateTime.Parse("2021-01-04"),
                CreatedTime = DateTime.Parse("2021-01-04"),
                UpdatedTime = DateTime.Parse("2021-01-04")
            });
        }

        public IEnumerable<Expense> GetAllExpenses()
        {
            return _expenses;
        }

        public Expense AddExpense(Expense expense)
        {
            expense.Id = _expenses.Count + 1;
            expense.CreatedTime = DateTime.UtcNow;
            expense.UpdatedTime = DateTime.UtcNow;
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
            oldExpense.UpdatedTime = DateTime.UtcNow;
            _expenses[expense.Id - 1] = oldExpense;
            return oldExpense;
        }
    }
}
