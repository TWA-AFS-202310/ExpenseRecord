import { ExpenseType } from './expense-creation/expense-creation.component';

export interface ExpenseRecord {
  id: string,
  description: string,
  type: ExpenseType | string,
  amount: number,
  date: string
}


export interface ExpenseCreationDto {
  description: string,
  type: ExpenseType | string,
  amount: number,
  date: string
}
