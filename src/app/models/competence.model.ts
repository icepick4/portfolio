export class Competence{
    constructor(
        public title: string,
        public levels: Level[],
        public description: string,
        public professionnalDesc: string,
    ) {}
}



export class Level{
    constructor(
        public title: string,
        public id: number,
        public skills: string[],
        public projects: number[],
    ) {}
}