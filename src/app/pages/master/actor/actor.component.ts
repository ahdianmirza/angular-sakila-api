import { Component, OnInit, ViewChild } from '@angular/core';
import { ListApiService } from 'src/app/service/api/list-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { MatDialog } from '@angular/material/dialog';

import * as moment from 'moment';
import { AlertService } from 'src/app/service/alert/alert.service';

export interface ListData {
  id: string
}

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css'],
})
export class ActorComponent implements OnInit {
  displayedColumns: string[] = ['id', 'first', 'last', 'update', 'actions'];
  dataSource!: MatTableDataSource<ListData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private _apiService: ListApiService,
    private matDialog: MatDialog,
    private _alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getAllActorData();
  }

  getAllActorData() {
    this._apiService.getAllActors().subscribe({
      next: (res: any) => {
        if (res.status === true) {
          this.dataSource = new MatTableDataSource(res.data);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }
      },
      error: (err: any) => {
        this.dataSource = new MatTableDataSource();
        console.info(err);
      },
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

  openAddDialog() {
    const addDialog = this.matDialog.open(DialogBodyComponent, {
      width: '40%',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
      data: {
        title: 'Add Actor Data',
      },
    });

    addDialog.afterClosed().subscribe({
      next: (val: boolean) => {
        if (val) {
          this.getAllActorData();
        }
      },
      error: (err: any) => console.info(err)
    });
  }

  deleteActor(id: number) {
    this._apiService.delete(id).subscribe({
      next: (res: any) => {
        this._alertService.openSnackBar("Actor deleted", 'Done');
        this.getAllActorData();
      },
      error: (err) => {
        console.info(err);
      }
    })
  }

  openEditDialog(data: any) {
    const editDialog = this.matDialog.open(DialogBodyComponent, {
      width: '40%',
      enterAnimationDuration: '200ms',
      exitAnimationDuration: '200ms',
      data: {
        title: 'Edit Actor Data',
        editData: data
      },
    });

    editDialog.afterClosed().subscribe({
      next: (val: boolean) => {
        if (val) {
          this.getAllActorData();
        }
      },
      error: (err: any) => console.info(err),
    });
  }
}
