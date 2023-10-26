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
    public async Task<ActionResult<List<ExpenseDto>>> GetAllExpenseRecords()
    {
        List<ExpenseDto> expenseRecords = await _service.GetExpenses();
        return Ok(expenseRecords);
    }

    [HttpPost]
    public async Task<ActionResult> CreateExpenseRecord(ExpenseCreationDto expenseCreationDto) 
    
    {
        await _service.CreateExpenseRecord(expenseCreationDto);
        return Created("", expenseCreationDto);

    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteExpenseRecord(string id)
    {
        var success = await _service.DeleteExpenseRecord(id);
        if (!success)
        {
            return NotFound($"The record with id {id} does not exist.");
        }
        return NoContent();
    }
}