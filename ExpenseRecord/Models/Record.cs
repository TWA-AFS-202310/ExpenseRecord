using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace ExpenseRecord.Models
{
    [BsonIgnoreExtraElements]
    public class Record
    {
        [BsonId]
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Description { get; set; } = string.Empty;
        public string Type { get; set; } = string.Empty;
        public int Amount { get; set; }

        [BsonRepresentation(BsonType.String)]
        public string CreatedTime { get; set; } = string.Empty;


    }
}
