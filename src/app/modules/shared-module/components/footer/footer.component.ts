import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
    dateNow: number | undefined;

    constructor() {
    }

    ngOnInit(): void {
        this.dateNow = new Date().getFullYear();
    }
}
