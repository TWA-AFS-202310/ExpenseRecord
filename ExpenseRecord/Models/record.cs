 using System.ComponentModel.DataAnnotations;

namespace ExpenseRecord.Models
{
    public class Record
    {
        public int id {get; set;}
    
        public string description { get; set; } = string.Empty;
        public string type { get; set; }
        public string amount { get; set; }

        public string date {get; set;}


    }
}