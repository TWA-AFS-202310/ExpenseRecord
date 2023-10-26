using Microsoft.AspNetCore.Mvc;
using ExpenseRecord.Models;
using ExpenseRecord.Services;

namespace ExpenseRecord.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("api/v1/[controller]")]
    //[ModelStateValidation]
    public class ExpenseRecordController : ControllerBase
    {
        
        private readonly IExpenseRecordService _recordservice;

        public ExpenseRecordController(IExpenseRecordService recordService)
        {
            _recordservice = recordService;
        }


        [HttpGet]
        [ProducesResponseType(typeof(List<RecordDto>), 200)]
        [ProducesResponseType(500)]
        public async Task<ActionResult<List<RecordDto>>> GetAsync()
        {
            var result = await _recordservice.GetAsync();
            return Ok(result);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(RecordDto),200)]
        [ProducesResponseType(404)]
        public async Task<ActionResult<RecordDto>> GetAsync(string id)
        {
            var result = await _recordservice.GetAsync(id);
            if (result == null)
            {
                return NotFound($"The item with id {id} does not exist.");
            }
            return Ok(result);
        }

        [HttpPost]
        [ProducesResponseType(typeof(RecordDto), 201)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public async Task<ActionResult<RecordDto>> PostAsync([FromBody] RecordCreateRequest recordCreateRequest)
        {
            var recordDto = new RecordDto
            {
                Description = recordCreateRequest.Description,
                Type = recordCreateRequest.Type,
                Amount = recordCreateRequest.Amount,
                CreatedTime = recordCreateRequest.CreatedTime
            };
            await _recordservice.CreateAsync(recordDto);
            return Created("", recordDto);
        }

        // PUT api/<recordsController>/5
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(RecordDto), 200)]
        [ProducesResponseType(typeof(RecordDto), 201)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public async Task<ActionResult<RecordDto>> PutAsync(string id, [FromBody] RecordDto recordDto)
        {
            bool isCreate = false;
            var existingItem = await _recordservice.GetAsync(id);
            if (existingItem is null)
            {
                isCreate = true;
                await _recordservice.CreateAsync(recordDto);
            }
            else
            {
                await _recordservice.ReplaceAsync(id, recordDto);
            }

            return isCreate ? Created("", recordDto) : Ok(recordDto);
        }

        // DELETE api/<recordsController>/5
        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<ActionResult> DeleteAsync(string id)
        {
            var isSuccessful = await _recordservice.RemoveAsync(id);
            if (!isSuccessful) { 
            return NotFound($"The item with id {id} does not exist.");
            }
            return NoContent();
        }
    }
}
