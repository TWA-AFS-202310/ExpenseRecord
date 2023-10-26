using MongoDB.Bson.Serialization.Attributes;

namespace ExpenseRecord.Models
{
    public class ExpenseRecord
    {
        [BsonId]
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Description { get; set; }
        public string kind { get; set; }
        public double Amount { get; set; }
        public string Time { get; set; }
    }
}
