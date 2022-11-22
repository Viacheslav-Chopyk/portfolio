import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormSpreeInterface} from "../interface/formspree.interface";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    formSpreeApi: string = environment.formSpreeApi;

    constructor(public http: HttpClient,) {
    }

    sendMail(requestData: FormSpreeInterface) {
        return this.http.post(this.formSpreeApi, requestData)
    }
}
