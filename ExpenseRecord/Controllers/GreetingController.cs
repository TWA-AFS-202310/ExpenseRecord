using Microsoft.AspNetCore.Mvc;
namespace ExpenseRecord.Controllers;

[ApiController]
[Route("[controller]")]
public class GreetingController : ControllerBase
{
    private readonly IExpenseService _expenseService;

    public GreetingController(IExpenseService _expenseService)
    {
        this._expenseService = _expenseService;
    }

    /*[HttpGet]
    public string greet(string name)
    {
        Console.Out.WriteLine(name);
        return "Hello, " + name;
    }*/

    [HttpPost]
    public ActionResult<ExpenseRecord> CreateAnExpense([FromBody] CreateExpenseDto expenseCreateRequest)
    {

        var newExpenseRecord = new ExpenseRecord
        {
            Description = expenseCreateRequest.Description,
            CreatedTime = DateTime.UtcNow,
            Type = expenseCreateRequest.Type,
            Amount = expenseCreateRequest.Amount,
        };

       _expenseService.CreateExpense(newExpenseRecord);
        return Created("", newExpenseRecord);
    }

    [HttpGet]
    public ActionResult<List<ExpenseRecord>> QueryExpense()
    {
        var result = _expenseService.GetAllExpense();
        return Ok(result);
    }

    [HttpDelete]
    public ActionResult DeleteAnExpense(string id)
    {
        _expenseService.DeleteAnExpense(id);
        return NoContent();
    }
}