import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: Number = new Date().getFullYear();
  pagesToDisplay!: string[];
  pages!: string[];
  constructor(private router: Router) { 
    router.events.subscribe((val) => {
      this.pagesToDisplay = this.pages.filter(page => page !== this.getCurrentPage());
    });
  }

  ngOnInit(): void {
    this.pages = ['home', 'projects', 'contact', 'about'];
    this.pagesToDisplay = this.pages.filter(page => page !== this.getCurrentPage());
  }

  getCurrentPage(): string {
    const url = this.router.url.split('/')[1];
    const currentPage: string = url;
    return currentPage;
  }
}
