using ExpenseRecord.DataModel;

namespace ExpenseRecord.Services
{
    public interface IExpenseService
    {
        Task<List<ExpenseItem>> GetAsync();
        Task CreateAsync(ExpenseItem newItem);
        Task<bool> DeleteAsync(string Description);
    }
}
