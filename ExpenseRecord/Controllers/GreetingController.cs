using ExpenseRecord.Models;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseRecord.Controllers;

[ApiController]
[Route("[controller]")]
public class GreetingController : ControllerBase
{
    [HttpGet]
    public List<Record> greet(Record name)
    {
        
        List<Record> result = new List<Record>();
        result.Add(name);
        return result;
    }

        private static List<Record> _expenses = new List<Record>();
        private static int _nextId = 1;

        [HttpGet]
        public ActionResult<IEnumerable<Record>> Get()
        {
            return _expenses;
        }

        [HttpPost]
        public IActionResult Post(Record expense)
        {
            expense.Id = _nextId++;
            _expenses.Insert(0, expense);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var expense = _expenses.FirstOrDefault(e => e.Id == id);
            if (expense != null)
            {
                _expenses.Remove(expense);
                return Ok();
            }
            return NotFound();
        }
    }

  




