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
    constructor(private aboutService: AboutService) {}

    ngOnInit(): void {
        this.getAllLanguages();
        this.getAllTools();
        this.getAllHobbies();
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
    elementsVisible($event: any) {
        console.log($event);
    }
}
