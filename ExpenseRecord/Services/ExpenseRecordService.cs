using ExpenseRecord.Models;

namespace ExpenseRecord.Services
{

    public class ExpenseRecordService : IExpenseRecordService
    {
        private static readonly List<ExpenseRecordDto> _expenseRecords = new();

        public Task<ExpenseRecordDto> CreateAsync(ExpenseRecordDto expenseRecordDto)
        {
            _expenseRecords.Add(expenseRecordDto);
            return Task.FromResult(expenseRecordDto);
        }

        public Task<List<ExpenseRecordDto>> GetAsync()
        {
            return Task.FromResult(_expenseRecords);
        }

        public Task<ExpenseRecordDto?> GetAsync(string id)
        {
            var result = _expenseRecords.Find(x => x.Id == id);
            return Task.FromResult(result);
        }

        public Task<bool> RemoveAsync(string id)
        {
            var itemToBeRemoved = _expenseRecords.Find(x => x.Id == id);
            if (itemToBeRemoved is null)
            {
                return Task.FromResult(false);
            }
            _expenseRecords.Remove(itemToBeRemoved);
            return Task.FromResult(true);
        }

        public Task ReplaceAsync(string id, ExpenseRecordDto updatedToDoItem)
        {
            var index = _expenseRecords.FindIndex(x => x.Id == id);
            if (index >= 0)
            {
                updatedToDoItem.CreatedTime = _expenseRecords[index].CreatedTime;
                _expenseRecords[index] = updatedToDoItem;
            }
            return Task.CompletedTask;
        }
    }
}