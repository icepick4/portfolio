export class About {
    constructor(
        public title: string,
        public image: string,
        public type: Type,
        public animation: boolean = false
    ) {}
}

export enum Type {
    Language,
    Tool,
    Hobby,
}
