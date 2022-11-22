import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../core/services/api.service";
import {FormSpreeInterface} from "../../../../core/interface/formspree.interface";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-contact-me',
    templateUrl: './contact-me.component.html',
    styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
    contactMeForm = new FormGroup({
        firstName: new FormControl('', [Validators.required]),
        proposalArea: new FormControl('', [Validators.required]),
    });

    constructor(private apiService: ApiService, private _snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
    }

    sendMail(): void {
        const requestData: FormSpreeInterface = {
            first_name: this.contactMeForm.value.firstName,
            proposal_area: this.contactMeForm.value.proposalArea
        }

        this.apiService.sendMail(requestData).subscribe(resp => {
            this._snackBar.open(
                'Successfully Send!!',
                'X',
                {duration: 3000, panelClass: ['success-snackbar']});
        })
    }
}
