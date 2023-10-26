using System.ComponentModel.DataAnnotations;

namespace ExpenseRecord.Models
{
    public class RecordDto
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        
        [StringLength(50)]
        public string Description { get; set; } 
        public string Type { get; set; } 
        public int Amount { get; set; } 
        public string CreatedTime { get; set; }
    }
}
