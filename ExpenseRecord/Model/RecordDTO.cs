using MongoDB.Bson.Serialization.Attributes;

namespace ExpenseRecord.Model;

public class RecordDTO
{
    public string Description { get; set; }
    public string Type { get; set; }
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public int Cost { get; set; }
    public string Date { get; set; }
}