import { Component, HostListener, OnInit } from "@angular/core";

@Component({
  selector: "app-life-road",
  templateUrl: "./life-road.component.html",
  styleUrls: ["./life-road.component.scss"],
})
export class LifeRoadComponent implements OnInit {
  listenScroll = true;

  constructor() {}

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    if (this.listenScroll) {
      const scrollTop = document.documentElement.scrollTop,
        lifeRoadTimelineElement = document.getElementById("life-road-timeline"),
        aboutMePageHeight =
          document.getElementById("about-me-container")?.offsetHeight,
        previewPageHeight =
          document.getElementById("preview-container")?.offsetHeight;
      if (lifeRoadTimelineElement) {
        const scrollPercentFromElement: number =
          lifeRoadTimelineElement.getBoundingClientRect().top;
        if (scrollPercentFromElement < scrollTop) {
          if (lifeRoadTimelineElement.children) {
            Array.from(lifeRoadTimelineElement.children).some(
              (children: any, index) => {
                const childrenScrollTop: number = +Math.abs(
                  children.offsetTop - document.documentElement.scrollTop
                ).toFixed(0);
                if (aboutMePageHeight && previewPageHeight) {
                  if (
                    children.style.visibility !== "visible" &&
                    aboutMePageHeight + previewPageHeight - 500 <
                      childrenScrollTop &&
                    childrenScrollTop <= scrollTop
                  ) {
                    children.style.visibility = "visible";
                    children.style.opacity = 1;
                    return true;
                  } else if (
                    children.style.visibility === "visible" &&
                    index ===
                      Array.from(lifeRoadTimelineElement.children).length - 1
                  ) {
                    this.listenScroll = false;
                    return true;
                  } else {
                    return false;
                  }
                } else {
                  return false;
                }
              }
            );
          }
        }
      }
    }
  }

  ngOnInit(): void {}
}
