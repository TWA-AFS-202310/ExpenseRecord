using ExpenseRecord.Model;
using MongoDB.Driver;

namespace ExpenseRecord.Service.Interface;

    public interface IExpenseRecordService
    {
        Task<ExpenseRecordDto> CreateExpenseRecordAsync(ExpenseRecordCreateDto todoItemRequestDto);
        Task<DeleteResult> DeleteExpenseRecordByIdAsync(string id);
        Task<ExpenseRecordDto> GetExpenseRecordByIdAsync(string id);
        Task<List<ExpenseRecordDto>> GetAllExpenseRecordAsync();
    }

