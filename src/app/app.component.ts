import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    displayHeader: boolean = false;
    constructor(private router: Router) {
        router.events.subscribe((val) => {
            if (router.url != '/') {
                this.displayHeader = true;
            } else {
                this.displayHeader = false;
            }
        });
    }
}
