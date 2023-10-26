using ExpenseRecord.Models;

namespace ExpenseRecord.services
{
    public interface IExpenseRecordService 
    {
        Task CreateRecord(ExpenseRecordDTO newRecord);
        Task<List<ExpenseRecordDTO>> GetAll();
        public bool RemoveRecord(string id);
    }
}
