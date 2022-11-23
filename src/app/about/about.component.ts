import { Component, HostListener, OnInit } from '@angular/core';
import { About } from '../models/about.model';
import { AboutService } from '../services/about.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    languages!: About[];
    hobbies!: About[];
    tools!: About[];
    abouts!: About[];
    constructor(private aboutService: AboutService) {}

    ngOnInit(): void {
        this.getAllLanguages();
        this.getAllTools();
        this.getAllHobbies();
        this.abouts = this.languages.concat(this.tools, this.hobbies);
        this.elementsVisible();
    }

    getAllLanguages() {
        this.languages = this.aboutService.getAllLanguages();
    }

    getAllTools() {
        this.tools = this.aboutService.getAllTools();
    }

    getAllHobbies() {
        this.hobbies = this.aboutService.getAllHobbies();
    }

    @HostListener('window:scroll', ['$event'])
    elementsVisible() {
        let scrollPercent =
            (document.documentElement.scrollTop + document.body.scrollTop) /
            (document.documentElement.scrollHeight -
                document.documentElement.clientHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        //check if scrollPercentRounded is NaN
        if (!scrollPercentRounded) {
            scrollPercentRounded = 10;
        }
        let nbAbouts = this.abouts.length;
        let aboutVisible = Math.round((scrollPercentRounded * nbAbouts) / 100);
        //set to true animation for abouts visible
        for (let i = 0; i < aboutVisible + 8; i++) {
            if (i < nbAbouts) {
                this.abouts[i].animation = true;
            }
        }
    }
}
