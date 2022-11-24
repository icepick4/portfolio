import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    displayHeader: boolean = false;
    displayCustomBackground!: boolean;
    mobile!: boolean;
    constructor(private router: Router) {
        router.events.subscribe((val) => {
            if (router.url != '/') {
                this.displayHeader = true;
            } else {
                this.displayHeader = false;
            }
            if (
                router.url.includes('projects') ||
                router.url.includes('about')
            ) {
                this.displayCustomBackground = false;
            } else if (!this.mobile) {
                this.displayCustomBackground = true;
            }
        });
    }

    ngOnInit() {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            this.mobile = true;
        }
    }
}
