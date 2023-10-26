using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ExpenseRecord.Controllers;

[Route("api/expenses")]
[ApiController]
public class ExpensesController : ControllerBase
{
    private ExpenseRepository expenseRepository;

    public ExpensesController()
    {
        expenseRepository = new ExpenseRepository();
    }

    [HttpGet]
    public List<Expense> GetExpenses()
    {
        return expenseRepository.GetAllExpenses();
    }

    [HttpPost]
    public IActionResult AddExpense(Expense expense)
    {
        expenseRepository.AddExpense(expense);
        return Ok();
    }

    [HttpDelete]
    public IActionResult DeleteExpense(Expense expense)
    {
        expenseRepository.DeleteExpense(expense);
        return Ok();
    }
}