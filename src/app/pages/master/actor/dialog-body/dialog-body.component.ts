import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlertService } from 'src/app/service/alert/alert.service';
import { ListApiService } from 'src/app/service/api/list-api.service';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css'],
})
export class DialogBodyComponent implements OnInit {
  inputData: any;
  actorForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialogRef: MatDialogRef<DialogBodyComponent>,
    private _formBuilder: FormBuilder,
    private _apiservice: ListApiService,
    private _alertService: AlertService
  ) {
    this.actorForm = this._formBuilder.group({
      first_name: '',
      last_name: '',
      last_update: ''
    })
  }

  ngOnInit(): void {
    this.inputData = this.data;
    this.actorForm.patchValue(this.data.editData);
  }

  closeDialog(cond: boolean) {
    if (cond) {
      this._dialogRef.close(true);
    }
  }

  onFormSubmit() {
    if (this.actorForm.valid) {
      if (this.data.editData) {
        this._apiservice.editActor(this.data.editData.actor_id, this.actorForm.value).subscribe({
          next: (val: any) => {
            this._alertService.openSnackBar('Actor updated');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.info(err);
          },
        });
      } else {
        this._apiservice.addActor(this.actorForm.value).subscribe({
          next: (val: any) => {
            this._alertService.openSnackBar('Actor added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.info(err);
          },
        });
      }
    }
  }
}
