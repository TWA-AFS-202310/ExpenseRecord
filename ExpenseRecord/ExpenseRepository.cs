using System.Runtime.CompilerServices;

namespace ExpenseRecord;

public class ExpenseRepository
{
    private List<ExpenseRecord> expenseRecordList = new List<ExpenseRecord>();

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
