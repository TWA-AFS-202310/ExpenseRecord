using ExpenseRecord.DTOs;
using ExpenseRecord.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace ExpenseRecord.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("api/v1/[controller]")]
    //[Authorize]
    [AllowAnonymous]
    public class ExpenseRecordController : ControllerBase
    {

        private readonly IExpenseRecordsService _expenseRepository;

        public ExpenseRecordController(IExpenseRecordsService service)
        {
            _expenseRepository = service;
        }


        [HttpPost]
        [ProducesResponseType(typeof(ExpenseRecordDTO), 201)]
        [ProducesResponseType(400)]
        [ProducesResponseType(500)]
        public async Task<ActionResult<ExpenseRecordDTO>> PostAsync([FromBody] ExpenseRecordDTO expenseRecordDTO)
        {
            expenseRecordDTO.Id = Guid.NewGuid().ToString();
            await _expenseRepository.CreateAsync(expenseRecordDTO);
            return Created("", expenseRecordDTO);
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<ExpenseRecordDTO>), 200)]
        [ProducesResponseType(500)]
        [SwaggerOperation(
            Summary = "Get All",
            Description = "Get All Records"
            )]
        public async Task<ActionResult<List<ExpenseRecordDTO>>> GetAsync()
        {
            var result = await _expenseRepository.GetAsync();
            return Ok(result);
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<ActionResult> DeleteAsync(string id)
        {
            var isSuccessful = await _expenseRepository.RemoveAsync(id);
            if (!isSuccessful)
            {
                return NotFound($"The item with id {id} does not exist.");
            }
            return NoContent();
        }

    }
}
