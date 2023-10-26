import {Expense} from "src/app/Expense";
export interface iExpense{
    getRecords():Expense[];
    getRecordById(id:string):Expense|undefined;
    createRecord(expense:Expense):Expense;
    deleteRecord(id:string):number;
}