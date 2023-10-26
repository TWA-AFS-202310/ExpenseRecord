using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json;

namespace ExpenseRecord.Model;

    public class ExpenseRecordDto
    {
        [JsonProperty(PropertyName = "_id")]
        [BsonId]
        public string Id { get; set; } = Guid.NewGuid().ToString();

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

