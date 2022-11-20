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
    constructor(private router: Router) {}

    ngOnInit(): void {}

    goSingleProject() {
        this.router.navigateByUrl(`projects/${this.project.id}`);
    }

    goAllProjects() {
        this.router.navigateByUrl('projects');
    }
}
