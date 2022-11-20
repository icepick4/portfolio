import { Component, OnInit } from '@angular/core';
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
}
