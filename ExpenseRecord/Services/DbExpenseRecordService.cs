using ExpenseRecord.Model;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ExpenseRecord.Services;

public class DbExpenseRecordService: IExpenseRecordService
{
    private readonly IMongoCollection<RecordDTO> _ToDoItemsCollection;

    public DbExpenseRecordService(
        IOptions<DatabaseSettings> ToDoItemStoreDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            ToDoItemStoreDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            ToDoItemStoreDatabaseSettings.Value.DatabaseName);

        _ToDoItemsCollection = mongoDatabase.GetCollection<RecordDTO>(
            ToDoItemStoreDatabaseSettings.Value.CollectionName);
    }


    public Task CreateAsync(RecordDTO newToDoItem)
    {
        //_toDoList.Add(newToDoItem);
        _ToDoItemsCollection.InsertOneAsync(newToDoItem);
        return Task.CompletedTask;
    }

    public async Task<List<RecordDTO>> GetAsync()
    {
        List<RecordDTO> resultList = await _ToDoItemsCollection.Find(_ => true).ToListAsync();
        return await Task.FromResult(resultList);
    }

    public async Task<RecordDTO?> GetAsync(string id)
    {
        RecordDTO result = await _ToDoItemsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        return await Task.FromResult(result);
    }


    public async Task<bool> RemoveAsync(string id)
    {
        var result = await GetAsync(id);
        if (result != null)
        {
            await _ToDoItemsCollection.DeleteOneAsync(x => x.Id == id);
            return true;
        }

        return false;
    }

    public Task ReplaceAsync(string id, RecordDTO updatedToDoItem)
    {
        throw new NotImplementedException();
    }
}