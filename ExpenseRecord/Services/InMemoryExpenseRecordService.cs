using ExpenseRecord.Models;

namespace ExpenseRecord.Services
{
    public class InMemoryExpenseRecordService : IExpenseRecordService
    {
        private static readonly List<RecordDto> _records = new();

        public Task CreateAsync(RecordDto newRecord)
        {
            _records.Add(newRecord);
            return Task.CompletedTask;
        }


        public Task<List<RecordDto>> GetAsync()
        {
            return Task.FromResult(_records);

        }

        public Task<RecordDto?> GetAsync(string id)
        {
            var record = _records.Find(x => x.Id == id);
            return Task.FromResult(record);

        }

       

        public Task<bool> RemoveAsync(string id)
        {
            var itemToBeRemoved = _records.Find(x => x.Id == id);
            if (itemToBeRemoved is null)
            {
                return Task.FromResult(false);
            }
            _records.Remove(itemToBeRemoved);
            return Task.FromResult(true);
        }

       

        public Task ReplaceAsync(string id, RecordDto updatedrecord)
        {
            var index = _records.FindIndex(x => x.Id == id);
            if (index >= 0)
            {
                updatedrecord.CreatedTime = _records[index].CreatedTime;
                _records[index] = updatedrecord;
            }
            return Task.CompletedTask;
        }
    }
}
