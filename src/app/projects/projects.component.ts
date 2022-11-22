import { Component, HostListener, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { PortfolioService } from '../services/portfolio.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    projects!: Project[];
    constructor(private portfolioService: PortfolioService) {}

    ngOnInit(): void {
        this.projects = this.portfolioService.getProjects();
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event) {
        //get the % of the scroll
        let scrollPercent =
            (document.documentElement.scrollTop + document.body.scrollTop) /
            (document.documentElement.scrollHeight -
                document.documentElement.clientHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        let nbProjects = this.projects.length;
        let projectVisible = Math.round(
            (scrollPercentRounded * nbProjects * 0.8) / 100
        );
        //set visible to true for the project on the scroll
        this.projects[projectVisible].visible = true;

        //disable others
        for (let i = 0; i < nbProjects; i++) {
            if (i != projectVisible) {
                this.projects[i].visible = false;
            }
        }
    }
}
