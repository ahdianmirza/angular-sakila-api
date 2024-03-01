import { Component, OnInit, ViewChild } from '@angular/core';
import { ListApiService } from 'src/app/service/list-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';

export interface ListData {
  id: string
}

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css'],
})
export class ActorComponent implements OnInit {
  displayedColumns: string[] = ['id', 'first', 'last', 'update'];
  dataSource!: MatTableDataSource<ListData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private apiService: ListApiService) {}

  ngOnInit(): void {
    this.apiService.getAllActors().subscribe((response: any) => {
      if (response.status === true) {
        this.dataSource = new MatTableDataSource(response.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      } else {
        this.dataSource = new MatTableDataSource();
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  convertDate(date: any) {
    if (date != null) {
      return moment(date).format('LLL');
    } else {
      return date;
    }
  }
}
