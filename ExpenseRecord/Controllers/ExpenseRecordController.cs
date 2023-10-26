using Microsoft.AspNetCore.Mvc;
using ExpenseRecord.Models;
using ExpenseRecord.Services;

namespace ExpenseRecord.Controllers;

[ApiController]
[Route("[controller]")]
public class ExpenseRecordController : ControllerBase
{
    private readonly IExpenseService _expenseService;

    public ExpenseRecordController(IExpenseService expenseService)
    {
        _expenseService = expenseService;
    }
    [HttpGet]
    public IEnumerable<Expense> Get()
    {
        return _expenseService.GetAllExpenses();
    }

    // 获取一条支出记录
    [HttpGet("{Id}")]
    public Expense Get(int Id)
    {
        return _expenseService.GetAllExpenses().FirstOrDefault(e => e.Id == Id);
    }

    // 添加一条支出记录
    [HttpPost]
    public IActionResult Post([FromBody] Expense expense)
    {
        expense = _expenseService.AddExpense(expense);
        return Ok(expense);
    }

    // 删除一条支出记录
    [HttpDelete("{Id}")]
    public IActionResult Delete(int Id)
    {
        _expenseService.DeleteExpense(Id);
        return Ok();
    }

    // 修改一条支出记录
    [HttpPut("{Id}")]
    public IActionResult Put(int Id, [FromBody] Expense expense)
    {
        _expenseService.UpdateExpense(Id, expense);
        return Ok();
    }
}