import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['id', 'body', 'title', 'userId'];
  dataSource :any;
  pageSizeOptions = [5,10,20,30];
  totalLength = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private _httpClient: HttpClient) {

  }
  ngOnInit() {
    this.loadUsers();
  }
  ngAfterViewInit() {
    if (this.dataSource) {
    //this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    }
  }
  loadUsers() {
    this._httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((data) => {
      console.log({data})
      this.dataSource = data;
      this.dataSource = new MatTableDataSource<any>(this.dataSource);
      this.totalLength = this.dataSource.filteredData.length;
      if (this.dataSource) {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  }
  getSelectedRow(row: any){
    console.log({row})
  }
  applyFilter(value:Event){
    console.log({event})
    const element = event?.currentTarget as HTMLInputElement
    this.dataSource.filter =  element.value.trim().toLocaleLowerCase();
  }
}
