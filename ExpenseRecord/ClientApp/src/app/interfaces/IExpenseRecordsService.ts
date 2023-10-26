import { Observable } from "rxjs";
import { IExpenseRecordDTO } from "../DTOs/IExpenseRecordDTO";

export interface IExpenseRecordsService{
    getRecords():Observable<IExpenseRecordDTO[]>;

    createRecord(record: IExpenseRecordDTO): Observable<IExpenseRecordDTO>;

    deleteOneRecord(id:string): Observable<boolean>;
}