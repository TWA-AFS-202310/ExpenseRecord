using ExpenseRecord.Models;
using ExpenseRecord.services;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ExpenseRecord.Controllers;

[ApiController]
[Produces("application/json")]

[Route("[controller]")]
public class GreetingController : ControllerBase
{
    private readonly IExpenseRecordService _expenseRecordService;
    public GreetingController(IExpenseRecordService expenseRecordService)
    {
        _expenseRecordService = expenseRecordService;
    }

    [HttpGet]
    [ProducesResponseType(typeof(List<ExpenseRecordDTO>), 200)]
    [ProducesResponseType(500)]

    public ActionResult<ExpenseRecordDTO> Get()
    {
        var records = _expenseRecordService.GetAll();

        return Ok(records);
    }

    [HttpPost]
    [ProducesResponseType(typeof(ExpenseRecordDTO), 201)]
    [ProducesResponseType(400)]
    [ProducesResponseType(500)]
    public ActionResult<ExpenseRecordDTO> Post([FromBody] ExpenseRecordDTO expenseRecordInput)
    {
        var toDoItemDto = new ExpenseRecordDTO
        {   
            Description = expenseRecordInput.Description,
            Type = expenseRecordInput.Type,
            Amount = expenseRecordInput.Amount,
            Time = expenseRecordInput.Time
        };
        _expenseRecordService.CreateRecord(expenseRecordInput);
        return Created("", expenseRecordInput);
    }

    [HttpDelete("{id}")]
    [ProducesResponseType(204)]
    [ProducesResponseType(404)]
    [ProducesResponseType(500)]
    public ActionResult DeleteAsync(string id)
    {
        var isSuccessful = _expenseRecordService.RemoveRecord(id);
        if (!isSuccessful)
        {
            return NotFound($"The item with id {id} does not exist.");
        }
        return NoContent();
    }


}