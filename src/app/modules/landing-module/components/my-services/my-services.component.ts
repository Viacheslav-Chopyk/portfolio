import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app-my-services",
    templateUrl: "./my-services.component.html",
    styleUrls: ["./my-services.component.scss"],
})
export class MyServicesComponent implements OnInit {
    constructor() {
    }

    myServicesArray: {
        title: string;
        imgUrl: string;
        description: string;
        cardDetailsShow: boolean;
    }[] = [
        {
            title: "Web Apps and Portals",
            imgUrl: "https://chopyk89.github.io/portfolio/assets/images/responsive-web-design-icon.png",
            description:
                "<h4>Creating Web App and Portals with Angular, Vanilla JS:</h4></h4> <p>- Cross-Device,</p> <p>- Responsive design,</p> <p>- Cross-Browser,</p> <p>- High-Quality software</p>",
            cardDetailsShow: false,
        },
        {
            title: "Mobile Apps",
            imgUrl: "https://chopyk89.github.io/portfolio/assets/images/cross-platform.png",
            description:
                "<h4>Flutter App Development:</h4> <p>- Cross-Device,</p> <p>- Best performance,</p> <p>- Custom Flutter Apps From Scratch,</p> <p>- Beautiful User Interface on any screen</p>",
            cardDetailsShow: false,
        },
        {
            title: "Support",
            imgUrl: "https://chopyk89.github.io/portfolio/assets/images/support-icon.png",
            description:
                "<h4>Support all systems:</h4> <p>- Web Applications,</p> <p>- Mobile Applications,</p> <p>- Create new functional</p>",
            cardDetailsShow: false,
        },
    ];

    ngOnInit(): void {
    }
}
