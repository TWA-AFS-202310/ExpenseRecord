namespace ExpenseRecord.Controllers
{
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

[Route("api/[controller]")]
[ApiController]
public class ExpenseRecordController : ControllerBase
{
    private static List<ExpenseRecord> expenseRecords = new List<ExpenseRecord>();

    [HttpGet]
    public ActionResult<IEnumerable<ExpenseRecord>> GetExpenseRecords()
    {
        return Ok(expenseRecords);
    }

    [HttpPost]
    public IActionResult AddExpenseRecord(ExpenseRecord expenseRecord)
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
}
