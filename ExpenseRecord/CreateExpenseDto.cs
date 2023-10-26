﻿namespace ExpenseRecord;

public class CreateExpenseDto
{
    public string Id { get; set; } = Guid.NewGuid().ToString();

    public string Description { get; set; } = string.Empty;

    public string Type { get; set; } = string.Empty;

    public Double Amount { get; set; }
}