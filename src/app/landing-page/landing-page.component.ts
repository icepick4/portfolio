import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
    mobile!: boolean;
    constructor(private title: Title) {}

    ngOnInit(): void {
        this.mobile = window.innerWidth < 1000;
        this.title.setTitle('Rémi JARA');
    }
}
