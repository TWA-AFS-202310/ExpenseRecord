using System.ComponentModel.DataAnnotations;

namespace ExpenseRecord.Models
{
    public class ExpenseCreationDto
    {
        [Required]
        public string Description { get; set; } = string.Empty;
        [Required]
        public string Type { get; set; } = String.Empty;
        [Required]
        public decimal Amount { get; set; } = 0;
        [Required]
        public string Date { get; set; } = String.Empty;
    }
}
