using ExpenseRecord.Models;

namespace ExpenseRecord.Services
{
    public interface IExpenseRecordService
    {
        Task<ExpenseRecordDto> CreateAsync(ExpenseRecordDto expenseRecordDto);
        Task<List<ExpenseRecordDto>> GetAsync();
        Task<ExpenseRecordDto?> GetAsync(string id);
        Task<bool> RemoveAsync(string id);
        Task ReplaceAsync(string id, ExpenseRecordDto updatedToDoItem);
    }
}
