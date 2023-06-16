import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
    imageCount: number = 0;
    isLoading: boolean = true;
    constructor(private aboutService: AboutService, private title: Title) {}

    ngOnInit(): void {
        this.getAllLanguages();
        this.getAllTools();
        this.getAllHobbies();
        this.abouts = this.languages.concat(this.tools, this.hobbies);
        this.abouts.forEach((about) => {
            const image = new Image();
            image.onload = () => {
                this.imageCount++;
                console.log(this.imageCount);
                if (this.imageCount === this.abouts.length) {
                    setTimeout(() => {
                        this.isLoading = false;
                    }, 1000);
                }
            };
            image.src = about.image;
        });
        this.elementsVisible();
        this.toolsTitle = document.getElementById('tools-title')!;
        this.hobbiesTitle = document.getElementById('hobbies-title')!;
        this.title.setTitle('About me');
    }

    ngOnDestroy() {
        for (const about of this.abouts) {
            about.animation = false;
        }
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

    visitPage(url: string) {
        window.open(url, '_blank');
    }

    @HostListener('window:scroll', ['$event'])
    elementsVisible() {
        const nbAbouts = this.abouts.length;
        let scroll, visible;
        scroll =
            (window.scrollY /
                (document.body.scrollHeight - window.innerHeight)) *
            100;
        if (window.innerWidth < 768) {
            scroll -= 35;
            visible = Math.round((scroll * (nbAbouts + 15)) / 115);
        } else {
            visible = Math.round((scroll * nbAbouts) / 115);
        }
        scroll = Math.round(scroll);
        if (!visible) {
            visible = 0;
        }
        for (let i = 0; i < visible + 4; i++) {
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
