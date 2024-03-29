import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FooterComponent} from "./components/footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule as MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCardModule as MatCardModule} from "@angular/material/card";
import {MatButtonModule as MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule as MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule as MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [FooterComponent],
    imports: [CommonModule, HttpClientModule, MatSnackBarModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
    providers: [],
    exports: [FooterComponent, HttpClientModule, MatSnackBarModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
})
export class SharedModule {
}
