
using ExpenseRecord.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ExpenseRecord.services


{
    public class ExpenseRecordService:IExpenseRecordService
    {
        private static readonly List<ExpenseRecordDTO> _expenseRecords = new();

        public Task CreateRecord(ExpenseRecordDTO newRecord)
        {
            _expenseRecords.Add(newRecord);
            return Task.CompletedTask;
        }


        public bool RemoveRecord(string id)
        {
            var itemToBeRemoved = _expenseRecords.Find(x => x.Id == id);
            if (itemToBeRemoved is null)
            {
                return false;
            }
            _expenseRecords.Remove(itemToBeRemoved);
            return true;
        }

        public List<ExpenseRecordDTO> GetAll()
        {

            return _expenseRecords;

        }

    }
}
