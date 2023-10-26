namespace ExpenseRecord.Models
{
    public class ExpenseRecordItemDto
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Description { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public double Amount { get; set; } = 0;
        public string Date { get; set; } = string.Empty;
    }
}
