import { Component, OnInit } from '@angular/core';
import { Competence } from '../models/competence.model';
import { CompetenceService } from '../services/competence.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills!: Competence[];
  constructor(private competenceService: CompetenceService) { 
  }

  ngOnInit(): void {
    this.skills = this.competenceService.getCompetences();
  }

}
