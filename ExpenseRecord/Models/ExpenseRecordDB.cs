using MongoDB.Bson;
using System.ComponentModel.DataAnnotations;
using MongoDB.Bson.Serialization.Attributes;

namespace ExpenseRecord.Models
{
    public class ExpenseRecordDB
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        [Required]
        [StringLength(50)]
        public string Description { get; set; } = string.Empty;
        public double Amount { get; set; }
        public string Type { get; set; } = string.Empty;
        [BsonRepresentation(BsonType.String)]
        public DateTime Time { get; set; } = DateTime.UtcNow;
    }
}
