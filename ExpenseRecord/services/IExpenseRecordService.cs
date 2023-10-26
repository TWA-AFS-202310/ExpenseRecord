using ExpenseRecord.Models;

namespace ExpenseRecord.services
{
    public interface IExpenseRecordService 
    {
        Task CreateAsync(ExpenseRecordDTO newRecord);
        Task<List<ExpenseRecordDTO>> GetAsync();
        Task<bool> RemoveAsync(string id);
    }
}
