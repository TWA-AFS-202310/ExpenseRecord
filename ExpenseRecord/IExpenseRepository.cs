namespace ExpenseRecord;

public interface IExpenseRepository
{
    void AddRecord(ExpenseRecord newRecord);
    List<ExpenseRecord> QueryAll();
    void RemoveRecord(string id);
}