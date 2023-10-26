using System.ComponentModel.DataAnnotations;

namespace ExpenseRecord.DataModel
{
    public class ExpenseItemCreateRequest
    {
        [Required]
        [StringLength(50)]
        public string Description { get; set; } 
        public string Type { get; set; }
        public double Amount { get; set; }

    }
}
