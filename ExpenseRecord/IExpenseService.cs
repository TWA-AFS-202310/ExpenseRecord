namespace ExpenseRecord;

using Microsoft.AspNetCore.Mvc;

public interface IExpenseService
{
    public void CreateExpense(ExpenseRecord request);

    public Task<ExpenseRecord> UpdateAnExpense(string id, ExpenseRecord request);
    public List<ExpenseRecord> GetAllExpense();

    public void DeleteAnExpense(string id);
}
