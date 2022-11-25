import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
    mobile!: boolean;
    constructor() {}

    ngOnInit(): void {
        this.mobile = window.innerWidth < 1000;
    }
}
