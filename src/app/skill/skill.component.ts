import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competence } from '../models/competence.model';
import { Project } from '../models/project.model';
import { CompetenceService } from '../services/competence.service';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  skill!: Competence;
  projects!: Project[];
  constructor(private route: ActivatedRoute, private competenceService: CompetenceService, private projectService: ProjectService) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.skill = this.competenceService.getCompetenceById(id);
    this.projects = this.skill.levels.map(level => this.projectService.getProjectById(level.projects[0]));
  }

}
