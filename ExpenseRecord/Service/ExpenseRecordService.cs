using ExpenseRecord.Model;
using ExpenseRecord.Service.Interface;
using ExpenseRecord.Utilities;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ExpenseRecord.Service
{
    public class ExpenseRecordService : IExpenseRecordService
    {
        private readonly IMongoCollection<ExpenseRecordDto> _collection;


        public ExpenseRecordService(
                IOptions<DatabaseSettings> ToDoItemStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                ToDoItemStoreDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                ToDoItemStoreDatabaseSettings.Value.DatabaseName);

            _collection = mongoDatabase.GetCollection<ExpenseRecordDto>(
                ToDoItemStoreDatabaseSettings.Value.CollectionName);
        }
        public async Task<ExpenseRecordDto> CreateToDoItemAsync(ExpenseRecordCreateDto expenseRecordCreateDto)
        {
            var newItem = new ExpenseRecordDto
            {
                Amount = expenseRecordCreateDto.Amount,
                Time = expenseRecordCreateDto.Time,
                Type = expenseRecordCreateDto.Type,
                Description = expenseRecordCreateDto.Description,
            };
            await _collection.InsertOneAsync(newItem);
            return newItem;
        }

        public async Task<DeleteResult> DeleteToDoItemAsync(string id)
        {
            return await _collection.DeleteManyAsync(doc => doc.Id != null);
        }

        public async Task<List<ExpenseRecordDto>> GetAllToDoItemAsync()
        {
            return await _collection.Find(doc => doc.Id != null).ToListAsync();
        }

        public async Task<ExpenseRecordDto> GetToDoItemByIdAsync(string id)
        {
            return await _collection.Find(doc => doc.Id == id).FirstOrDefaultAsync();
        }
    }
}
