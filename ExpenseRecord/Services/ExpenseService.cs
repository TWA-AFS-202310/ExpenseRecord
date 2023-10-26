using ExpenseRecord.DataModel;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ExpenseRecord.Services
{
    public class ExpenseService : IExpenseService
    {
        //依赖注入MongoDB数据库
        private readonly IMongoCollection<ExpenseItem> _expenseItemCollection;
        public ExpenseService(IOptions<DataBaseSetting> DataBaseSetting)
        {
            var mongoClient = new MongoClient(DataBaseSetting.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(DataBaseSetting.Value.DatabaseName);
            _expenseItemCollection = mongoDatabase.GetCollection<ExpenseItem>(DataBaseSetting.Value.CollectionName);
        }
        //create
        public async Task CreateAsync(ExpenseItem newToDoItem)
        { 
            await _expenseItemCollection.InsertOneAsync(newToDoItem);
        }

        //Getall
        public async Task<List<ExpenseItem>> GetAsync()
        {
            var expenseItemDtos = new List<ExpenseItem>();
            var expenseItems = await _expenseItemCollection.Find(_ => true).ToListAsync();
            if (expenseItems is null)
            {
                return expenseItemDtos;
            }
            for (var i = 0; i< expenseItems.Count; i++)
            {
                expenseItemDtos.Add(new ExpenseItem
                {
                    Description = expenseItems[i].Description,
                    Type = expenseItems[i].Type,
                    Amount = expenseItems[i].Amount,
                    CreateTime = expenseItems[i].CreateTime,
                  
                });
            }
            return expenseItemDtos;
        }
        public async Task<bool> DeleteAsync(string id)
        {
            var result = await _expenseItemCollection.DeleteOneAsync(x => x.Id == id);
            return result.DeletedCount > 0;
        }
    }
}
