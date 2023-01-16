import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Competence } from '../models/competence.model';
import { CompetenceService } from '../services/competence.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  skill!: Competence;
  constructor(private route: ActivatedRoute, private competenceService: CompetenceService) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.skill = this.competenceService.getCompetenceById(id);
  }

}
