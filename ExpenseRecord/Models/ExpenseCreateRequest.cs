namespace ExpenseRecord.Models
{
    public class ExpenseCreateRequest
    {
        public string Description {  get; set; }
        public string Type {  get; set; }
        public double Amount {  get; set; }
        public string Time {  get; set; }
    }
}
