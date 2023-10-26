
using ExpenseRecord.Models;

namespace ExpenseRecord.Services
{
    public interface IExpenseService
    {
        Task CreateAsync(ExpenseDto newExpenseItem);
        Task<List<ExpenseDto>> GetAsync();
        Task<ExpenseDto?> GetAsync(string id);
        Task<bool> DeleteAsync(string id);

    }
}
