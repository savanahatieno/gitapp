import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
})
export class SearchUserComponent implements OnInit {
  searchName: string;
  @Output() searchOutput = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  search() {
    this.searchOutput.emit(this.searchName);
    this.searchName = '';
  }
}
