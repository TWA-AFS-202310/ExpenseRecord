using ExpenseRecord.Model;

namespace ExpenseRecord.Services;

public interface IExpenseRecordService
{
    Task CreateAsync(RecordDTO newToDoItem);
    Task<List<RecordDTO>> GetAsync();
    Task<RecordDTO?> GetAsync(string id);
    Task<bool> RemoveAsync(string id);
    Task ReplaceAsync(string id, RecordDTO updatedToDoItem);
}