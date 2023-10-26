using ExpenseRecord.Models;

namespace ExpenseRecord.Services
{
    public class InMemoryExpenseRecordService : IExpenseRecordService
    {
        private static readonly List<ExpenseRecordItemDto> _expenseRecords = new();

        public Task CreateAsync(ExpenseRecordItemDto expenseRecordItem)
        {
            _expenseRecords.Add(expenseRecordItem);
            return Task.CompletedTask;
        }

        public Task<List<ExpenseRecordItemDto>> GetAsync()
        {
            return Task.FromResult(_expenseRecords);
        }

        public Task<bool> RemoveAsync(string id)
        {
            var recordToBeRemoved = _expenseRecords.Find(x => x.Id == id);
            if (recordToBeRemoved is null)
            {
                return Task.FromResult(false);
            }
            _expenseRecords.Remove(recordToBeRemoved);
            return Task.FromResult(true);
        }
    }
}
