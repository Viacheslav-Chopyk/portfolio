import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openCV(): void {
    window.open(
        "https://chopyk89.github.io/portfolio/src/assets/cv/CV_FE_Viacheslav_Chopyk.pdf",
      "_blank",
      "fullscreen=yes"
    );
  }
}
