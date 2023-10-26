import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';
import { RecordDTO } from './record';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
url!:string ;
  constructor(private http:HttpClient,@Inject('BASE_URL') baseUrl: string) {this.url=baseUrl+'api/v1/Greeting/'; }

  create(describe: RecordDTO):Observable<RecordDTO> {
    return this.http.post<RecordDTO>(this.url,describe);
  }

  getAll(){
   return this.http.get<RecordDTO[]>(this.url);
   
  //  .subscribe(
  //   data => {
  //     //console.log(data)
  //     const items = [];
  //     for(let i=0;i<data.length;i++)
  //     {
  //       let ite={
  //   Id: '',
  //   Description: data[i].Description,
  //   Type: data[i].Type,
  //   Cost: data[i].Cost,
  //   Date: data[i].Date
  //       }

  //       console.log(ite)
  //       items.push(ite);
  //     }
  //     return of(items);

  //   }
  //  )
   }

  get(id: string) {
    return this.http.get<RecordDTO>(this.url+id).pipe(switchMap((data: any)=>{

        let ite={
          Description: data.Description,
          Type: data.Type,
          Cost: data.Cost,
          Date: data.Date
        }
        console.log(ite)
      
      return of(ite);
    }));
  }


  delete(itemID:string)
  {
     this.http.delete<RecordDTO>(this.url+itemID).subscribe();
  }
}
