import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../models/project.model';

@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
    @Input() project!: Project;
    typeProject!: string;
    imageLoaded: boolean = false;
    constructor(private router: Router) {}

    ngOnInit(): void {
        if (
            this.project.urlProject.includes('.zip') ||
            this.project.urlProject.includes('.jar')
        ) {
            this.typeProject = 'Download';
        } else {
            this.typeProject = 'View the website';
        }
    }

    goSingleProject() {
        this.router.navigateByUrl(`projects/${this.project.id}`);
    }

    goAllProjects() {
        this.router.navigateByUrl('projects');
    }

    loaded() {
        this.imageLoaded = true;
    }
}
