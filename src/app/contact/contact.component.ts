import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    count = 0;
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Contact');
  }

  incrementCounter(){
    this.count++;
    if (this.count==10){
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
        this.count = 0;
    }
  }

}
