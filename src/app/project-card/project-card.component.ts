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
    @Input() showAll!: boolean;
    constructor(private router: Router) {}

    ngOnInit(): void {}

    goSingleProject() {
        this.router.navigate(['projects', this.project.id]);
    }
}
