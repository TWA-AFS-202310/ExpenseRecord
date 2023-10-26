using System.Runtime.InteropServices;
using ExpenseRecord.Models;

namespace ExpenseRecord.Services
{
    public interface IExpenseRecordService
    {
        public void CreateExpenseRecode(ExpenseCreationDto expenseCreationDto);
        public void DeleteExpenseRecode(string id);
        public List<ExpenseDto> GetExpenses();
    }
}