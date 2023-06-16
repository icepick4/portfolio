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
    isLoading: boolean = true;
    imageCount: number = 0;
    constructor(private projectService: ProjectService, private title: Title) {}

    ngOnInit(): void {
        this.projects = this.projectService.getProjects();
        this.projects.forEach((project) => {
            const image = new Image();
            image.onload = () => {
                this.imageCount++;
                if (this.imageCount === this.projects.length) {
                    setTimeout(() => {
                        this.isLoading = false;
                    }, 500);
                }
            };
            image.src = project.image;
        });
        this.title.setTitle('Projects');
    }
}
