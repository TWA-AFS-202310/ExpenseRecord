namespace ExpenseRecord.Service;

public interface IExpenseRecordService
{
    Task CreateAsync(Models.ExpenseRecord record);
    Task<List<Models.ExpenseRecord>> GetAsync();
    Task<bool> RemoveAsync(string description);

}