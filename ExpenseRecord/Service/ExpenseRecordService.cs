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
                IOptions<DatabaseSettings> ExpenseRecordStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                ExpenseRecordStoreDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                ExpenseRecordStoreDatabaseSettings.Value.DatabaseName);

            _collection = mongoDatabase.GetCollection<ExpenseRecordDto>(
                ExpenseRecordStoreDatabaseSettings.Value.CollectionName);
        }
        public async Task<ExpenseRecordDto> CreateExpenseRecordAsync(ExpenseRecordCreateDto expenseRecordCreateDto)
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

        public async Task<DeleteResult> DeleteExpenseRecordByIdAsync(string id)
        {
            return await _collection.DeleteOneAsync(doc => doc.Id == id);
        }

        public async Task<List<ExpenseRecordDto>> GetAllExpenseRecordAsync()
        {
            return await _collection.Find(doc => doc.Id != null).ToListAsync();
        }

        public async Task<ExpenseRecordDto> GetExpenseRecordByIdAsync(string id)
        {
            return await _collection.Find(doc => doc.Id == id).FirstOrDefaultAsync();
        }
    }
}
