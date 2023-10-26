using Microsoft.AspNetCore.Mvc;
using ExpenseRecord.Services;
using ExpenseRecord.Models;

namespace ExpenseRecord.Controllers;

[ApiController]
[Route("[controller]")]
//new
public class ExpenseRecordController : ControllerBase
{
    private readonly IExpenseRecordService _service;


    public ExpenseRecordController(IExpenseRecordService service)
    {
        _service = service;
    }
    [HttpGet]
    public ActionResult GetAllExpenseRecords()
    {
        List<ExpenseDto> expenseRecords = _service.GetExpenses();
        return Ok(expenseRecords);
    }

    [HttpPost]
    public ActionResult CreateExpenseRecord(ExpenseCreationDto expenseCreationDto) 
    
    {
            return Ok(expenseCreationDto);

    }

    [HttpDelete]
    public ActionResult DeleteExpenseRecord(string id)
    {
        return NoContent();
    }
}