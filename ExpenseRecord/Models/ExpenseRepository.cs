public class ExpenseRepository
{
    private List<Expense> expenses;

    public ExpenseRepository()
    {
        expenses = new List<Expense>();
    }

    public void AddExpense(Expense expense)
    {
        expenses.Add(expense);
    }

    public List<Expense> GetAllExpenses()
    {
        return expenses;
    }

    public void DeleteExpense(Expense expense)
    {
        // var _expense = expenses.FirstOrDefault(e => e.Id == id);
        // if (_expense != null)
        // {
        //     expenses.Remove(expense);
        // }
        expenses.Remove(expense);
    }
}