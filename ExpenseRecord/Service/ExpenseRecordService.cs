using MongoDB.Driver;
using ExpenseRecord.Models;

namespace ExpenseRecord.Service
{
    public class ExpenseRecordService : IExpenseRecordService
    {

        private readonly IMongoCollection<Models.ExpenseRecord> _ToDoItemsCollection;


        public ExpenseRecordService()
        {
            string connectionString = "mongodb://localhost:27017";

            // Create a MongoDB client
            MongoClient mongoClient = new MongoClient(connectionString);


            var mongoDatabase = mongoClient.GetDatabase("mydata");

            _ToDoItemsCollection = mongoDatabase.GetCollection<Models.ExpenseRecord>("record");

        }

        public async Task CreateAsync(Models.ExpenseRecord record)

        {
            record.Time = record.Time.Replace("-", string.Empty);
            await _ToDoItemsCollection.InsertOneAsync(record);
        }

        public async Task<List<Models.ExpenseRecord>> GetAsync()
        {
            var records = await _ToDoItemsCollection.Find(_ => true).ToListAsync();
            return records;
        }

        public async Task<bool> RemoveAsync(string description)
        {
            var result = await _ToDoItemsCollection.DeleteOneAsync(x => x.Description == description);
            return result.DeletedCount > 0;
        }

    }
}