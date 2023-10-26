using System.Runtime.InteropServices;
using ExpenseRecord.Models;

namespace ExpenseRecord.Services
{
    public interface IExpenseRecordService
    {
        public Task CreateExpenseRecord(ExpenseCreationDto expenseCreationDto);
        public Task<bool> DeleteExpenseRecord(string id);
        public Task<List<ExpenseDto>> GetExpenses();
    }
}