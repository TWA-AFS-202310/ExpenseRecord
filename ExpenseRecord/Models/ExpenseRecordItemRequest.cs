namespace ExpenseRecord.Models
{
    public class ExpenseRecordItemRequest
    {
        public string Description { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public double Amount { get; set; } = 0;
        public string Date { get; set; } = string.Empty;
        //description, type, amount, date
    }
}
