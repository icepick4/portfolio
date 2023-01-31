import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: Number = new Date().getFullYear();
  currentPage: string;
  pagesToDisplay!: string[];
  constructor(private router: Router) { 
    const url = this.router.url.split('/')[1];
    this.currentPage = url;
  }

  ngOnInit(): void {
    this.pagesToDisplay = ['home', 'projects', 'contact', 'about'];
    this.pagesToDisplay = this.pagesToDisplay.filter(page => page !== this.currentPage);
  }

}
