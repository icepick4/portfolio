import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../models/project.model';
import { PortfolioService } from '../services/portfolio.service';

@Component({
    selector: 'app-single-project-card',
    templateUrl: './single-project-card.component.html',
    styleUrls: ['./single-project-card.component.scss'],
})
export class SingleProjectCardComponent implements OnInit {
    project!: Project;
    constructor(
        private portfolioService: PortfolioService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.scrollToTop();
        const id = +this.route.snapshot.params['id'];
        this.project = this.portfolioService.getProjectById(id);
    }

    scrollToTop() {
        window.scrollTo(0, 0);
    }
}
