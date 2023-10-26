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
        public async Task<ActionResult<ExpenseRecordDto>> CreateToDoItemAsync(ExpenseRecordCreateDto expenseRecordCreateDto)
        {
            var result = await _service.CreateToDoItemAsync(expenseRecordCreateDto);
            return Created("Successfully create a new item.", result);
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteToDoItemAsync(string id)
        {
            var result = await _service.DeleteToDoItemAsync(id);
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
        public async Task<ActionResult<ExpenseRecordDto>> GetToDoItemByIdAsync(string id)
        {
            var result = await _service.GetToDoItemByIdAsync(id);
            if (result == null)
            {
                return NotFound($"Cannot find item with ID = {id}");
            }
            return Ok(result);
        }
        [HttpGet]
        public async Task<ActionResult<List<ExpenseRecordDto>>> GetAllToDoItemAsync()
        {
            var result = await _service.GetAllToDoItemAsync();
            if (result == null)
            {
                result = new List<ExpenseRecordDto>();
            }
            return Ok(result);
        }
    }
}
