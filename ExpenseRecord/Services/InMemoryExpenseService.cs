using ExpenseRecord.Models;
namespace ExpenseRecord.Services
{
    public class InMemoryExpenseService:IExpenseService
    {
        private readonly List<ExpenseDto> _expenseRecords = new();

        public Task CreateAsync(ExpenseDto expense)
        {
            _expenseRecords.Add(expense);
            return Task.CompletedTask;
        }

        public Task<List<ExpenseDto>> GetAsync() 
        { 
            return Task.FromResult(_expenseRecords);
        }

        public Task<bool> DeleteAsync(string id) 
        {
            var expenseToBeRemoved = _expenseRecords.Find(x => x.Id == id);
            if (expenseToBeRemoved is null) 
            { 
                return Task.FromResult(false);
            }
            _expenseRecords.Remove(expenseToBeRemoved);
            return Task.FromResult(true);
        }

        public Task<bool> RemoveAsync(string id)
        {
            throw new NotImplementedException();
        }

        public Task<ExpenseDto?> GetAsync(string id)
        {
            var expense = _expenseRecords.Find(x => x.Id == id);
            return Task.FromResult(expense);
        }
    }
}
