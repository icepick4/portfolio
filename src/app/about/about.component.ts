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
    toolsTitle!: HTMLElement;
    hobbiesTitle!: HTMLElement;
    constructor(private aboutService: AboutService) {}

    ngOnInit(): void {
        this.getAllLanguages();
        this.getAllTools();
        this.getAllHobbies();
        this.abouts = this.languages.concat(this.tools, this.hobbies);
        this.elementsVisible();
        this.toolsTitle = document.getElementById('tools-title')!;
        this.hobbiesTitle = document.getElementById('hobbies-title')!;
        console.log(this.hobbiesTitle);
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
        const nbAbouts = this.abouts.length;
        // detect purcentage of scroll (remove header size)
        let scroll =
            (window.scrollY /
                (document.body.scrollHeight - window.innerHeight)) *
            100;
        scroll = Math.round(scroll);
        if (scroll >= 20) {
            const goUp = document.getElementById('go-up')!;
            goUp.style.visibility = 'visible';
            goUp.style.opacity = '1';
        }
        let visible = Math.round((scroll * nbAbouts) / 100);
        if (!visible) {
            visible = 2;
        }
        for (let i = 0; i < visible + 6 - visible * 0.25; i++) {
            if (i < nbAbouts) {
                this.abouts[i].animation = true;
                if (i >= this.languages.length - 1) {
                    this.toolsTitle.style.opacity = '1';
                }
                if (i >= this.languages.length + this.tools.length - 1) {
                    this.hobbiesTitle.style.opacity = '1';
                }
            }
        }
    }
}
