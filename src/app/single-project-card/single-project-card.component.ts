import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { About } from '../models/about.model';
import { Project } from '../models/project.model';
import { AboutService } from '../services/about.service';
import { ProjectService } from '../services/project.service';

@Component({
    selector: 'app-single-project-card',
    templateUrl: './single-project-card.component.html',
    styleUrls: ['./single-project-card.component.scss'],
})
export class SingleProjectCardComponent implements OnInit {
    project!: Project;
    tools!: About[];
    constructor(
        private projectService: ProjectService,
        private aboutService: AboutService,
        private route: ActivatedRoute,
        private title: Title
    ) {}

    ngOnInit(): void {
        this.scrollToTop();
        const id = +this.route.snapshot.params['id'];
        this.project = this.projectService.getProjectById(id);
        this.tools = [];
        this.title.setTitle(this.project.name);
    }

    scrollToTop() {
        window.scrollTo(0, 0);
    }

    getImageTool(tool: string) {
        return this.aboutService.getImageTool(tool);
    }

    getUrlTool(tool: string, projectUrl: string) {
        return this.aboutService.getUrlTool(tool, projectUrl);
    }

    visitPage(url: string) {
        window.open(url, '_blank');
    }
}
