using System;
using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices;
using System.Text.Json.Serialization;

namespace ExpenseRecord.Models
{
    public class Expense
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }
        public double Amount { get; set; }
        public DateTime Date { get; set; }
        [JsonIgnore]
        public DateTime CreatedTime { get; set; }
        [JsonIgnore]
        public DateTime UpdatedTime { get; set; }
    }

    public class AddExpenseRequest
    {
        [Required]
        public string Description { get; set; }
        [Required]
        public string Type { get; set; }
        [Required]
        [Range(0.01, double.MaxValue, ErrorMessage = "Amount must be greater than 0")]
        public double Amount { get; set; }
        [Required]
        public DateTime Date { get; set; }
    }

}
