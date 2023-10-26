using ExpenseRecord.Models;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseRecord.Controllers;

[ApiController]
[Route("[controller]")]
public class GreetingController : ControllerBase
{
        private static List<Record> _expenses = new List<Record>(){

        new Record {id = 0, description = "Expense 1", type = "Type 1", amount = "10", date = "1010" }
       };
        
        private static int _nextId = 1;

        [HttpGet]
        public ActionResult<List<Record>> Get()
        {   
            return _expenses;
        }

        [HttpPost]
        public Record Post([FromBody]Record newExpense)
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

  




