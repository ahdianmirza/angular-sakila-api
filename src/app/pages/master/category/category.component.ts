import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { CategoryApiService } from 'src/app/service/api/category-api.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from 'moment';
import { AlertService } from 'src/app/service/alert/alert.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'last_update', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _categoryApiService: CategoryApiService,
    private _alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getCategoryList();
  }

  convertDate(date: any) {
    if (date != null) {
      return moment(date).format('LLL');
    } else {
      return date;
    }
  }

  openDialog() {
    const dialog = this._dialog.open(DialogComponent, {
      width: '40%',
    });

    dialog.afterClosed().subscribe({
      next: (cond: boolean) => {
        if (cond) {
          this.getCategoryList();
        }
      },
      error: (err: any) => console.info(err),
    });
  }

  getCategoryList() {
    this._categoryApiService.getAllCategory().subscribe({
      next: (res: any) => {
        this.dataSource = new MatTableDataSource(res.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err: any) => console.info(err),
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteCategory(id: number) {
    this._categoryApiService.deleteCategory(id).subscribe({
      next: (val: any) => {
        this._alertService.openSnackBar('Category deleted', 'Done');
        this.getCategoryList();
      },
      error: (err: any) => console.info(err)
    })
  }
}
