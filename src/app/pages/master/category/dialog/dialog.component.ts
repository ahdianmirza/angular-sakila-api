import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertService } from 'src/app/service/alert/alert.service';
import { CategoryApiService } from 'src/app/service/api/category-api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  categoryForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _categoryApiService: CategoryApiService,
    private _dialogRef: MatDialogRef<DialogComponent>,
    private _alertService: AlertService
    ) {
    this.categoryForm = this._formBuilder.group({
      name: '',
      last_update: new Date()
    })
  }

  onFormSubmit() {
    if (this.categoryForm.valid) {
      this._categoryApiService.addCategory(this.categoryForm.value).subscribe({
        next: (val: any) => {
          this._alertService.openSnackBar('Category added successfully');
          this._dialogRef.close(true);
        },
        error: (err: any) => console.info(err)
      })
    }
  }
}
