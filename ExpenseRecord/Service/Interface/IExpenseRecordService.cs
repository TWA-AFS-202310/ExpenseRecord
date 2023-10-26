using ExpenseRecord.Model;
using MongoDB.Driver;

namespace ExpenseRecord.Service.Interface;

    public interface IExpenseRecordService
    {
        Task<ExpenseRecordDto> CreateToDoItemAsync(ExpenseRecordCreateDto todoItemRequestDto);
        Task<DeleteResult> DeleteToDoItemAsync(string id);
        Task<ExpenseRecordDto> GetToDoItemByIdAsync(string id);
        Task<List<ExpenseRecordDto>> GetAllToDoItemAsync();
    }

