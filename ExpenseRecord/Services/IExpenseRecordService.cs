using ExpenseRecord.Models;



namespace ExpenseRecord.Services;



public interface IExpenseRecordService
{
    Task CreateAsync(RecordDto newRecord);
    Task<List<RecordDto>> GetAsync();
    Task<RecordDto?> GetAsync(string id);
    Task<bool> RemoveAsync(string id);
    Task ReplaceAsync(string id, RecordDto updatedrecord);
}