export class About {
    constructor(
        public title: string,
        public image: string,
        public type: Type
    ) {}
}

export enum Type {
    Language,
    Tool,
    Hobby,
}
