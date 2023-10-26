﻿using MongoDB.Bson.Serialization.Attributes;

namespace ExpenseRecord.DataModel
{
    public class ExpenseItem
    {
        [BsonId]
        public string Id { get; set; } =Guid.NewGuid().ToString();
        public string Description { get; set; }
        public string Type { get; set; }
        public double Amount { get; set; }
        public DateTime CreateTime { get; set; } // 修正拼写
    }

}