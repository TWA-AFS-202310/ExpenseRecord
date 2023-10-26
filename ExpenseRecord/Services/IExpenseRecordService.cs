using ExpenseRecord.Models;

namespace ExpenseRecord.Services
{
    public interface IExpenseRecordService
    {
        Task CreateAsync(ExpenseRecordItemDto expenseRecordItem);
        Task<List<ExpenseRecordItemDto>> GetAsync();
        //Task<ExpenseRecordItem?> GetAsync(string id);
        Task<bool> RemoveAsync(string id);
        //Task ReplaceAsync(string id, ExpenseRecordItem updatedToDoItem);
    }
}
