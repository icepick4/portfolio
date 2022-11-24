import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-link-image',
    templateUrl: './link-image.component.html',
    styleUrls: ['./link-image.component.scss'],
})
export class LinkImageComponent implements OnInit {
    @Input() href!: string;
    @Input() image!: string;
    @Input() alt!: string;
    @Input() router!: boolean;
    constructor() {}

    ngOnInit(): void {}
}
