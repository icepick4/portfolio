import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-go-up',
    templateUrl: './go-up.component.html',
    styleUrls: ['./go-up.component.scss'],
})
export class GoUpComponent implements OnInit {
    showGoUp = false;
    constructor() {}

    ngOnInit(): void {}

    onActivate(event: any) {
        //scroll to the top of the page
        let scrollToTop = window.setInterval(() => {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 40); // how far to scroll on each step
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 2);
    }

    @HostListener('window:scroll', ['$event'])
    ngAfterContentChecked() {
        let scroll =
            (window.scrollY /
                (document.body.scrollHeight - window.innerHeight)) *
            100;
        scroll = Math.round(scroll);
        if(scroll > 20){
            this.showGoUp = true;
        }else{
            this.showGoUp = false;
        }
    }
}
