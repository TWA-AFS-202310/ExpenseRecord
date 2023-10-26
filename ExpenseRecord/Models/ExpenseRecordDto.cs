namespace ExpenseRecord.Models
{
    public class ExpenseRecordDto
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Description { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public int Amount { get; set; } = 0;
        public long CreatedTime { get; set; } = new DateTimeOffset(DateTime.Now).ToUnixTimeMilliseconds();
    }
}
