using System.ComponentModel.DataAnnotations;

namespace ExpenseRecord.DTOs
{
    public class ExpenseRecordDTO
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public string Description { get; set; } = string.Empty;

        [Required]
        public string Type { get; set; }

        [Required]
        public int Amount { get; set; }

        [Required]
        public long Date{ get; set; }
    }
}
