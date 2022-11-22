import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-preview",
  templateUrl: "./preview.component.html",
  styleUrls: ["./preview.component.scss"],
})
export class PreviewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openWikiPage(): void {
    window.open("https://en.wikipedia.org/wiki/Ukraine");
  }
}
