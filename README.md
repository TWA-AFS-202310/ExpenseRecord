# Expense Record System

## Business Requirement
We are going to implement an expense record system for personal use.
It’s used to record daily expenses, and do query, and deletion operations.
The expense record includes the following information: description, type, amount, date
For example: lunch, meal, 50, 20221010
1
AC1: 
GIVEN there is no expense data, 
WHEN user visits page, 
THEN the page does not show any expense data.

AC2: 
GIVEN page without any data, 
WHEN user types expense information and clicks add button, 
THEN the page shows the newly added expense data.

AC3: 
GIVEN page with some data, 
WHEN user visits page, 
THEN the page shows all expense data.

AC4: 
GIVEN page with some data, 
WHEN user types expense information and clicks add button, 
THEN the page shows the newly added expense data on the top.

AC5: 
GIVEN page with some data, 
WHEN user clicks delete button next to expense, 
THEN the page no longer shows the deleted expense.

## Practice Requirement:
- Git commit with baby steps
- Follow commit specifications https://www.conventionalcommits.org/en/v1.0.0/
- Write tests for frontend and backend

## How to Test
- backend test
    Run `dotnet test` under root catalogue and view test result
- frontend test
    Go to the catalogue ExpenseRecord/ClientApp, and run `ng test`  
    If there is no 'ng' command, please install it with: `npm install -g @angular/cli`  
 
# Tips - how to create angular conponent
- Go to the catalogue ExpenseRecord/ClientApp
- `ng generate component COMPOENT_NAME --module app`

# References
- C# 
    https://learn.microsoft.com/en-us/dotnet/csharp/
- ASP.NET Core
    https://learn.microsoft.com/en-us/aspnet/core/getting-started
- Angular
    https://angular.io/
    https://angular.io/guide/testing
- Typescript
    https://www.typescriptlang.org/docs/
