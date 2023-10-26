using Microsoft.Extensions.Options;
using MongoDB.Driver;
using System;
using ExpenseRecord.Models;
using ExpenseRecord.Services;


public class ExpenseRecordService : IExpenseRecordService
{
        private readonly IMongoCollection<Record> _recordsCollection;

        public ExpenseRecordService(
            IOptions<RecordDatabaseSettings> recordStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                recordStoreDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                recordStoreDatabaseSettings.Value.DatabaseName);

            _recordsCollection = mongoDatabase.GetCollection<Record>(
                recordStoreDatabaseSettings.Value.CollectionName);
        }
        //...
        //CRUD operation methods
    
    public async Task CreateAsync(RecordDto newRecord)
    {
        var item = new Record
        {
            Description = newRecord.Description,
            Type = newRecord.Type,
            Amount = newRecord.Amount,
        };
        await _recordsCollection.InsertOneAsync(item);
    }

    public async Task<List<RecordDto>> GetAsync()
    {
        var recordList = new List<RecordDto>();
        var records = await _recordsCollection.Find(_ => true).ToListAsync();
        if (records is null)
        {
            return recordList;
        }
        for (var i = 0; i < records.Count; i++)
        {
            recordList.Add(new RecordDto
            {
                Id = records[i].Id,
                Description = records[i].Description,
                Type = records[i].Type,
                Amount = records[i].Amount,
                CreatedTime = records[i].CreatedTime
            });
        }
        return recordList;
    }

    //
     
     //
     // need to transfer result to dto format
    public async Task<RecordDto?> GetAsync(string id)
    {
        var record = await _recordsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        if (record is null)
        {
            return null;
        }

        var recordDto = new RecordDto
        {
            Id = record.Id,
            Description = record.Description,
            Type = record.Type,
            Amount = record.Amount,
            CreatedTime = record.CreatedTime,
        };

        return recordDto;
        //throw new NotImplementedException();
    }
    
    public async Task<bool> RemoveAsync(string id)
    {
        var result = await _recordsCollection.DeleteOneAsync(x=>x.Id == id);
        return result.DeletedCount>0;
        // throw new NotImplementedException();
    }

    public async Task ReplaceAsync(string id, RecordDto updatedrecord)
    {
        var item = new Record { Id = id, Description = updatedrecord.Description, Type = updatedrecord.Type, Amount = updatedrecord.Amount};
        await _recordsCollection.ReplaceOneAsync(x => x.Id == id, item);
        //throw new NotImplementedException();
    }
}
