using ExpenseRecord.Models;
using ExpenseRecord.Services;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseRecord.Controllers;

[ApiController]
[Produces("application/json")]
[Route("api/v1/[controller]")]
//[Route("[controller]")]
public class ExpenseRecordController: ControllerBase
{
    private readonly IExpenseRecordService _expenseRecordService;
    public ExpenseRecordController(IExpenseRecordService expenseRecordService)
    {
        _expenseRecordService = expenseRecordService;
    }

    [HttpGet]
    public async Task<ActionResult<List<ExpenseRecordItemDto>>> GetAsync()
    {
        var result = await _expenseRecordService.GetAsync();
        return Ok(result);
    }

    [HttpPost]
    public async Task<ActionResult<ExpenseRecordItemDto>> PostAsync(ExpenseRecordItemRequest expenseRecordItemRequest)
    {
        ExpenseRecordItemDto newRecord = ToExpenseRecordItem(expenseRecordItemRequest);
        await _expenseRecordService.CreateAsync(newRecord);
        return Created("", expenseRecordItemRequest);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteAsync(string id)
    {
        var isSuccessful = await _expenseRecordService.RemoveAsync(id);
        if (!isSuccessful)
        {
            return NotFound($"The item with id {id} does not exist.");
        }
        return NoContent();
    }

    public ExpenseRecordItemDto ToExpenseRecordItem(ExpenseRecordItemRequest expenseRecordItemRequest)
    {
        return new ExpenseRecordItemDto
        {
            Description = expenseRecordItemRequest.Description,
            Type = expenseRecordItemRequest.Type,
            Amount = expenseRecordItemRequest.Amount,
            Date = expenseRecordItemRequest.Date,
        };
    }

}
