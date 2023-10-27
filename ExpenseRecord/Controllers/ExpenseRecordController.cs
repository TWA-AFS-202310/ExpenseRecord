using ExpenseRecord.Service;
using Microsoft.AspNetCore.Mvc;
using ExpenseRecord.Models;
namespace ExpenseRecord.Controllers;

[ApiController]
[Route("[controller]")]
public class ExpenseRecordController : ControllerBase
{

    private readonly IExpenseRecordService _expenseRecordService;


    public ExpenseRecordController(IExpenseRecordService expenseRecordService)
    {
        _expenseRecordService = expenseRecordService;


    }
    [HttpGet]
    public async Task<ActionResult<List<Models.ExpenseRecord>>> GetAsync()
    {
        var result = await _expenseRecordService.GetAsync();
        result.Reverse();
        return Ok(result);
    }

    [HttpPost]
    public async Task<ActionResult<Models.ExpenseRecord>> PostAsync([FromBody] Models.ExpenseRecord record)
    {


        await _expenseRecordService.CreateAsync(record);
        return Created("", record);
    }

    [HttpDelete("{description}")]

    public async Task<ActionResult> DeleteAsync(string description)
    {
        var isSuccessful = await _expenseRecordService.RemoveAsync(description);
        if (!isSuccessful)
        {
            return NotFound($"The item with id {description} does not exist.");
        }
        return NoContent();
    }
}