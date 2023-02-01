import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
    projects!: Project[];
    constructor(private projectService: ProjectService, private title: Title) {}

    ngOnInit(): void {
        this.projects = this.projectService.getProjects();
        this.title.setTitle('Projects');
    }
}
