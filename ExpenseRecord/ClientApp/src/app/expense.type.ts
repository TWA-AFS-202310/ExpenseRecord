

export interface ExpenseRecord {
  id: string,
  description: string,
  type:  string,
  amount: number,
  date: string
}


export interface ExpenseCreationDto {
  description: string,
  type:  string,
  amount: number,
  date: string
}
