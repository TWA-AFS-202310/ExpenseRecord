using ExpenseRecord.Model;
using ExpenseRecord.Service.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ExpenseRecord.Controllers
{
    [Route("api/v1/expenserecords")]
    [ApiController]
    public class ExpenseRecordController : ControllerBase
    {
        private readonly IExpenseRecordService _service;

        public ExpenseRecordController(IExpenseRecordService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<ActionResult<ExpenseRecordDto>> CreateExpenseRecordAsync(ExpenseRecordCreateDto expenseRecordCreateDto)
        {
            var result = await _service.CreateExpenseRecordAsync(expenseRecordCreateDto);
            return Created("Successfully create a new item.", result);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteExpenseRecordByIdAsync(string id)
        {
            var result = await _service.DeleteExpenseRecordByIdAsync(id);
            switch (result.DeletedCount)
            {
                case 0:
                    return NotFound($"The item with ID = {id} does not exist.");
                case 1:
                    return NoContent();
                default:
                    return NoContent();

            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ExpenseRecordDto>> GetExpenseRecordByIdAsync(string id)
        {
            var result = await _service.GetExpenseRecordByIdAsync(id);
            if (result == null)
            {
                return NotFound($"Cannot find item with ID = {id}");
            }
            return Ok(result);
        }
        [HttpGet]
        public async Task<ActionResult<List<ExpenseRecordDto>>> GetAllExpenseRecordAsync()
        {
            var result = await _service.GetAllExpenseRecordAsync();
            if (result == null)
            {
                result = new List<ExpenseRecordDto>();
            }
            return Ok(result);
        }
    }
}
