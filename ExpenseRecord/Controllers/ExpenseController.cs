using Microsoft.AspNetCore.Mvc;
using ExpenseRecord.Models;
using ExpenseRecord.Services;

namespace ExpenseRecord.Controllers;

[ApiController]
[Route("[controller]")]
public class ExpenseController : ControllerBase
{
    private readonly IExpenseService _expenseService;
    public ExpenseController(IExpenseService expenseService)
    {
        _expenseService = expenseService;
    }

    [HttpGet]
    [ProducesResponseType(typeof(List<ExpenseDto>), 200)]
    [ProducesResponseType(500)]
    public async Task<ActionResult<List<ExpenseDto>>> GetAsync()
    {
        var result = await _expenseService.GetAsync();
        return Ok(result);
    }

    [HttpGet("{id}")]
    [ProducesResponseType(typeof(ExpenseDto), 200)]
    [ProducesResponseType(404)]
    public async Task<ActionResult<ExpenseDto>> GetAsync(string id)
    {
        var result = await _expenseService.GetAsync(id);
        if (result == null)
        {
            return NotFound($"The item with id {id} does not exist.");
        }
        return Ok(result);
    }

    [HttpPost]
    [ProducesResponseType(typeof(ExpenseDto), 201)]
    [ProducesResponseType(400)]
    [ProducesResponseType(500)]
    public async Task<ActionResult<ExpenseDto>> PostAsync([FromBody] ExpenseCreateRequest expenseCreateRequest)
    {
        var expenseDto = new ExpenseDto
        {
            Description = expenseCreateRequest.Description,
            Type = expenseCreateRequest.Type,
            Amount = expenseCreateRequest.Amount,
            Time = expenseCreateRequest.Time,
        };
        await _expenseService.CreateAsync(expenseDto);
        return Created("", expenseDto);
    }

    [HttpDelete("{id}")]
    [ProducesResponseType(204)]
    [ProducesResponseType(404)]
    [ProducesResponseType(500)]
    public async Task<ActionResult> DeleteAsync(string id)
    {
        var isSuccessful = await _expenseService.DeleteAsync(id);
        if (!isSuccessful)
        {
            return NotFound($"The item with id {id} does not exist.");
        }
        return NoContent();
    }
}
