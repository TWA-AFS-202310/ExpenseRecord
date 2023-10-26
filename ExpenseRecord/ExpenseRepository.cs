using System.Runtime.CompilerServices;

namespace ExpenseRecord;

public class ExpenseRepository : IExpenseRepository
{
    private List<ExpenseRecord> expenseRecordList = new List<ExpenseRecord>();

    public ExpenseRepository()
    {
        ExpenseRecord newRecord = new ExpenseRecord
        {
            Description = "test",
            Amount = 100,
            CreatedTime = DateTime.UtcNow,
            Id = "123",
            Type = "Res"
        };
        expenseRecordList.Add(newRecord);
    }

    public void AddRecord(ExpenseRecord newRecord)
    {
        expenseRecordList.Add(newRecord);
    }

    public void RemoveRecord(string id)
    {
        expenseRecordList.RemoveAll(value => value.Id.Equals(id));
    }

    public List<ExpenseRecord> QueryAll()
    {
        return expenseRecordList;
    }
}
