using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections;
using System.ComponentModel.DataAnnotations;
using System.Data;

namespace ExpenseRecord;

public class ExpenseRecord
{
    public string Id { get; set; } = Guid.NewGuid().ToString();

    public string Description { get; set; } = string.Empty;

    public string Type { get; set; } = string.Empty;

    public DateTime CreatedTime { get; set; }

    public Double Amount { get; set; }

}
