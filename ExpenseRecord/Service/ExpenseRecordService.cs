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

        public Task<DeleteResult> DeleteToDoItemAsync(string id)
        {
            throw new NotImplementedException();
        }

        public Task<List<ExpenseRecordDto>> GetAllToDoItemAsync()
        {
            throw new NotImplementedException();
        }

        public Task<ExpenseRecordDto> GetToDoItemByIdAsync(string id)
        {
            throw new NotImplementedException();
        }
    }
}
