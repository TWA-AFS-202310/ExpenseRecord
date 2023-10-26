export interface ExpenseRecord extends NewExpenseRecord{
    id: string

}

export interface NewExpenseRecord{
    type: ExpenseType,
    time: string,
    description: string,
    amount: number

}

enum ExpenseType{
    Meal,
    Shopping,
    Transportation,
    Health,
    Housing,
    Entertainment
}