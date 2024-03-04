import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ListApiService } from 'src/app/service/list-api.service';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css'],
})
export class DialogBodyComponent implements OnInit {
  inputData: any;
  actorAddForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _dialogRef: MatDialogRef<DialogBodyComponent>,
    private _formBuilder: FormBuilder,
    private _apiservice: ListApiService
  ) {
    this.actorAddForm = this._formBuilder.group({
      first_name: '',
      last_name: '',
      last_update: ''
    })
  }

  ngOnInit(): void {
    this.inputData = this.data;
  }

  closeDialog() {
    this._dialogRef.close(true);
  }

  onFormSubmit() {
    if (this.actorAddForm.valid) {
      this._apiservice.addActor(this.actorAddForm.value).subscribe({
        next: (val: any) => {
          alert('Actor added successfully');
          this.closeDialog();
        },
        error: (err: any) => {
          console.info(err);
        },
      });
    }
  }
}
