using ExpenseRecord.Models;
using ExpenseRecord.Services;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ExpenseRecord.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class ExpenseRecordController : ControllerBase
{
    private readonly IExpenseRecordService _expenseRecordService;

    public ExpenseRecordController(IExpenseRecordService expenseRecordService)
    {
        _expenseRecordService = expenseRecordService;
    }

    [HttpGet]
    [ProducesResponseType(typeof(ExpenseRecordDto), 200)]
    [ProducesResponseType(500)]
    public async Task<ActionResult<List<ExpenseRecordDto>>> GetAsync()
    {
        var result = await _expenseRecordService.GetAsync();
        return Ok(result);
    }

    [HttpGet("{id}")]
    [ProducesResponseType(typeof(ExpenseRecordDto), 200)]
    [ProducesResponseType(404)]
    [ProducesResponseType(500)]
    public async Task<ActionResult<ExpenseRecordDto>> GetAsync(string id)
    {
        var result = await _expenseRecordService.GetAsync(id);
        if (result == null)
        {
            return NotFound($"The item with id {id} does not exist.");
        }
        return Ok(result);
    }

    [HttpPost]
    [ProducesResponseType(typeof(ExpenseRecordDto), 201)]
    [ProducesResponseType(400)]
    [ProducesResponseType(409)]
    [ProducesResponseType(500)]
    public async Task<ActionResult<ExpenseRecordDto>> PostAsync([FromBody] ExpenseRecordCreateQuery expenseRecordCreateQuery)
    {

        var expenseRecordDto = new ExpenseRecordDto
        {
            Description = expenseRecordCreateQuery.Description,
            Type = expenseRecordCreateQuery.Type,
            Amount = expenseRecordCreateQuery.Amount,
            CreatedTime = new DateTimeOffset(DateTime.Now).ToUnixTimeMilliseconds()
        };
        expenseRecordDto = await _expenseRecordService.CreateAsync(expenseRecordDto);

        return Created("", expenseRecordDto);
    }

    [HttpPut("{id}")]
    [ProducesResponseType(typeof(ExpenseRecordDto), 200)]
    [ProducesResponseType(typeof(ExpenseRecordDto), 201)]
    [ProducesResponseType(400)]
    [ProducesResponseType(500)]
    public async Task<ActionResult<ExpenseRecordDto>> PutAsync(string id, [FromBody] ExpenseRecordDto expenseRecordDto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        bool isCreate = false;
        var existingItem = await _expenseRecordService.GetAsync(id);
        if (existingItem is null)
        {
            isCreate = true;
            await _expenseRecordService.CreateAsync(expenseRecordDto);
        }
        else
        {
            await _expenseRecordService.ReplaceAsync(id, expenseRecordDto);
        }

        return isCreate ? Created("", expenseRecordDto) : Ok(expenseRecordDto);
    }


    [HttpDelete("{id}")]
    [ProducesResponseType(204)]
    [ProducesResponseType(404)]
    [ProducesResponseType(500)]
    public async Task<ActionResult> DeleteAsync(string id)
    {
        var isSuccessful = await _expenseRecordService.RemoveAsync(id);
        if (!isSuccessful)
        {
            return NotFound($"The item with id {id} does not exist.");
        }
        return NoContent();
    }
}