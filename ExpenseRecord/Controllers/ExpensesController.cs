using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace ExpenseRecord.Controllers;

// [Route("api/expenses")]
// [ApiController]
// public class ExpensesController : ControllerBase
// {
//     private ExpenseRepository expenseRepository;

//     public ExpensesController()
//     {
//         expenseRepository = new ExpenseRepository();
//     }

//     [HttpGet]
//     public List<Expense> GetExpenses()
//     {
//         return expenseRepository.GetAllExpenses();
//     }

//     [HttpPost]
//     public IActionResult AddExpense(Expense expense)
//     {
//         expenseRepository.AddExpense(expense);
//         return Ok();
//     }

//     [HttpDelete]
//     public IActionResult DeleteExpense(Expense expense)
//     {
//         expenseRepository.DeleteExpense(expense);
//         return Ok();
//     }
// }


[Route("api/[controller]")]
[ApiController]
public class ExpensesController : ControllerBase
{
    private static List<Expense> expenseRecords = new List<Expense>(){
        new Expense{
            // Description ="ss",Type = "23", Amount = 22, Date="SS"
        }
    };

    [HttpGet]
    public ActionResult<IEnumerable<Expense>> GetExpenseRecords()
    {
        return Ok(expenseRecords);
    }

    [HttpPost]
    public IActionResult AddExpenseRecord(Expense expenseRecord)
    {
        expenseRecords.Insert(0, expenseRecord);
        return Ok();
    }

    [HttpDelete("{index}")]
    public IActionResult DeleteExpenseRecord(int index)
    {
        if (index >= 0 && index < expenseRecords.Count)
        {
            expenseRecords.RemoveAt(index);
            return Ok();
        }
        else
        {
            return NotFound();
        }
    }
}
