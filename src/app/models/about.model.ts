export class About {
    constructor(
        public title: string,
        public image: string,
        public type: Type,
        public animation: boolean = false,
        public color: string = '#fff'
    ) {}
}

export enum Type {
    Language,
    Tool,
    Hobby,
}
