namespace ExpenseRecord.Models
{
    public class ExpenseRecordCreateQuery
    {
        public string Description { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public int Amount { get; set; } = 0;
    }
}
