using ExpenseRecord.DTOs;

namespace ExpenseRecord.Interfaces
{
    public interface IExpenseRecordsService
    {
        Task CreateAsync(ExpenseRecordDTO newItem);
        Task<List<ExpenseRecordDTO>> GetAsync();
        //Task<ExpenseRecordDTO?> GetAsync(string id);
        Task<bool> RemoveAsync(string id);
    }
}
