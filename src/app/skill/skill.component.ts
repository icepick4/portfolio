import { Component, Input, OnInit } from '@angular/core';
import { Competence } from '../models/competence.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() skill!: Competence;
  constructor() { }

  ngOnInit(): void {
  }

}
