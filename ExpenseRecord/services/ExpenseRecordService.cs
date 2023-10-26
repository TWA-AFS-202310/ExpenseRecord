
using ExpenseRecord.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ExpenseRecord.services


{
    public class ExpenseRecordService:IExpenseRecordService
    {
        private static readonly List<ExpenseRecordDTO> _expenseRecords = new();

        public Task CreateAsync(ExpenseRecordDTO newRecord)
        {
            _expenseRecords.Add(newRecord);
            return Task.CompletedTask;
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

        public Task<List<ExpenseRecordDTO>> GetAsync()
        {
            return Task.FromResult(_expenseRecords);

        }

    }
}
