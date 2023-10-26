using ExpenseRecord.Model;
using ExpenseRecord.Services;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseRecord.Controllers;

[ApiController]
[Route("api/v1/[controller]")]
public class GreetingController : ControllerBase
{
    public readonly IExpenseRecordService _toDoListService;
    public GreetingController(IExpenseRecordService _toDoListService)
    {
        this._toDoListService = _toDoListService;
    }

    // GET: api/<ValuesController>
    [HttpGet]
    public async Task<ActionResult<List<RecordDTO>>> Get()
    {
        var result = await _toDoListService.GetAsync();
        return Ok(result);
    }

    // GET api/<ValuesController>/5
    [HttpGet("{id}")]
    public async Task<ActionResult<RecordDTO>> Get(string id)
    {
        var result = await _toDoListService.GetAsync(id);
        if (result == null)
        {
            return NotFound($"the ToDoItem with {id} is not exist");
        }
        return Ok(result);
    }

    // POST api/<ValuesController>
    [HttpPost]
    public async Task<ActionResult<RecordDTO>> Post([FromBody] RecordDTO createRequest)
    {
        var res = new RecordDTO()
        {
            Description = createRequest.Description,
            Date = createRequest.Date,
            Type = createRequest.Type,
            Cost = createRequest.Cost
        };
        await _toDoListService.CreateAsync(res);
        return Created("", res);
    }

    // PUT api/<ValuesController>/5
    [HttpPut("{id}")]
    [ProducesResponseType(typeof(RecordDTO), 200)]
    [ProducesResponseType(typeof(RecordDTO), 201)]
    [ProducesResponseType(typeof(RecordDTO), 400)]
    [ProducesResponseType(typeof(RecordDTO), 500)]

    public async Task<ActionResult> Put(string id, [FromBody] RecordDTO toDoItemDto)
    {
        if (await _toDoListService.GetAsync(id) is null)
        {
            toDoItemDto.Id = id;
            await _toDoListService.CreateAsync(toDoItemDto);
            return Created("", toDoItemDto);
        }
        else
        {
            await _toDoListService.ReplaceAsync(id, toDoItemDto);
            return Ok(toDoItemDto);
        }
    }

    // DELETE api/<ValuesController>/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<RecordDTO>> Delete(string id)
    {
        var result = await _toDoListService.RemoveAsync(id);
        return result ? NoContent() : BadRequest("toDoItem id not exist");
    }
}