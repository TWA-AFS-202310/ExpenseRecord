using ExpenseRecord.Models;

namespace ExpenseRecord.Services
{
    public class ExpenseRecordService : IExpenseRecordService
    {
        private static readonly List<ExpenseDto> expenseDtos = new List<ExpenseDto>();
        public Task CreateExpenseRecord(ExpenseCreationDto expenseCreationDto)
        {
            ExpenseDto expenseDto = new ExpenseDto();
            expenseDto.Description = expenseCreationDto.Description;
            expenseDto.Type = expenseCreationDto.Type;
            expenseDto.Amount = expenseCreationDto.Amount;
            expenseDto.Date = expenseCreationDto.Date;
            expenseDtos.Add(expenseDto);
            return Task.CompletedTask;
        }

        public Task<bool> DeleteExpenseRecord(string id)
        {
            var result = expenseDtos.Find(x => x.Id == id);
            if (result is null) { return Task.FromResult(false); }
            expenseDtos.Remove(result);
            return Task.FromResult(true);
        }

        public Task<List<ExpenseDto>> GetExpenses()
        {
            return Task.FromResult(expenseDtos);
        }
    }
}
