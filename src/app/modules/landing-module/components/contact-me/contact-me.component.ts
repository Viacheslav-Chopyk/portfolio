import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../core/services/api.service";
import {FormSpreeInterface} from "../../../../core/interface/formspree.interface";
import {MatSnackBar as MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  contactMeForm = new UntypedFormGroup({
    firstName: new UntypedFormControl('', [Validators.required]),
    proposalArea: new UntypedFormControl('', [Validators.required]),
  });

  constructor(
    private apiService: ApiService,
    private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  sendMail(): void {
    const requestData: FormSpreeInterface = {
      first_name: this.contactMeForm.value.firstName,
      proposal_area: this.contactMeForm.value.proposalArea
    }

    this.apiService.sendMail(requestData).subscribe(() => {
      this._snackBar.open(
        'Successfully Send!!',
        'X',
        {duration: 3000, panelClass: ['success-snackbar']});
    })
  }
}
