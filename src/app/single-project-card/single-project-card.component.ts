import { Component, OnInit } from '@angular/core';
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
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.scrollToTop();
        const id = +this.route.snapshot.params['id'];
        this.project = this.projectService.getProjectById(id);
        this.tools = [];
    }

    scrollToTop() {
        window.scrollTo(0, 0);
    }

    getImageTool(tool: string) {
        return this.aboutService.getImageTool(tool);
    }
}
