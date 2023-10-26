using ExpenseRecord.DTOs;
using ExpenseRecord.Interfaces;
using ExpenseRecord.SettingDTOs;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ExpenseRecord.Services
{
    public class ExpenseRecordsRepository : IExpenseRecordsService
    {

        private readonly IMongoCollection<ExpenseRecordDTO> _expenseCollection;

        public ExpenseRecordsRepository(
            IOptions<ExpenseStorageDBSetting> expenseStoreDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                expenseStoreDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                expenseStoreDatabaseSettings.Value.DatabaseName);

            _expenseCollection = mongoDatabase.GetCollection<ExpenseRecordDTO>(
                expenseStoreDatabaseSettings.Value.CollectionName);
        }

        public async Task CreateAsync(ExpenseRecordDTO newItem)
        {
            await _expenseCollection.InsertOneAsync(newItem);
        }

        public async Task<List<ExpenseRecordDTO>> GetAsync()
        {
            return await _expenseCollection.Find(_ => true).ToListAsync();
        }

        public async Task<bool> RemoveAsync(string id)
        {
            var result = await _expenseCollection.DeleteOneAsync(x => x.Id == id);
            return result.DeletedCount >= 1;
        }
    }
}
