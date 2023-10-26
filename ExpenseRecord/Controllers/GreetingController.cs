using Microsoft.AspNetCore.Mvc;

namespace ExpenseRecord.Controllers;

[ApiController]
[Route("[controller]")]
public class GreetingController : ControllerBase
{
    private static List<Expense> _expenses = new List<Expense>(){

        new Expense {id = 0, description = "lunch", type = "meal", amount = 10, date = "20231026" }
       };

        private static int _nextId = 1;

        [HttpGet]
        public ActionResult<List<Expense>> Get()
        {   
            return _expenses;
        }

        [HttpPost]
        public Expense Post([FromBody]Expense newExpense)
        {   
            newExpense.id = _nextId++;
            _expenses.Insert(0, newExpense);
            return newExpense;
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var expense = _expenses.FirstOrDefault(e => e.id == id);
            if (expense != null)
            {
                _expenses.Remove(expense);
                return Ok();
            }
            return NotFound();
        }
}