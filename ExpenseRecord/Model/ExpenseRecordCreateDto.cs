using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace ExpenseRecord.Model
{
    public class ExpenseRecordCreateDto
    {
        [BsonElement("description")]
        public string Description { get; set; }

        [BsonElement("time")]
        [BsonRepresentation(BsonType.DateTime)]
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime Time { get; set; }

        [BsonElement("type")]
        public ExpenseType Type { get; set; }

        [BsonElement("amount")]
        public double Amount { get; set; }
    }
}
