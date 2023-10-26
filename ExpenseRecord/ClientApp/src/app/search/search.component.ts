import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input()
  fromParent: string|undefined

  @Output()
  itemevent = new EventEmitter<string>();
  SearchStr(){
    this.itemevent.emit(this.fromParent);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
