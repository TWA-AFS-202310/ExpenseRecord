namespace ExpenseRecord.Models
{
    public class ExpenseDto
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Description { get; set; } = string.Empty;
        public string Type { get; set; }
        public double Amount { get; set; }
        public string Time {  get; set; }
    }
}
