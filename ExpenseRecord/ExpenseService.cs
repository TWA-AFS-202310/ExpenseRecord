namespace ExpenseRecord;

public class ExpenseService : IExpenseService
{
    private readonly IExpenseRepository _ExpenseCollection;

    public ExpenseService (IExpenseRepository expenseCollection)
    {
        _ExpenseCollection = expenseCollection;
    }

    public void CreateExpense(ExpenseRecord expense)
    {
        _ExpenseCollection.AddRecord(expense);
    }

    public void DeleteAnExpense(string id)
    {
        _ExpenseCollection.RemoveRecord(id);
    }

    public List<ExpenseRecord> GetAllExpense()
    {
        return _ExpenseCollection.QueryAll();
    }

    public Task<ExpenseRecord> UpdateAnExpense(string id, ExpenseRecord request)
    {
        throw new NotImplementedException();
    }
}
