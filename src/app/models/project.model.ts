export class Project {
    id: number;
    name: string;
    description: string;
    purpose: string;
    tools: string[];
    image: string;
    urlGit: string;
    urlProject: string;

    constructor(
        name: string,
        description: string,
        purpose: string,
        tools: string[],
        urlGit: string,
        urlProject: string
    ) {
        this.id = 0;
        this.name = name;
        this.description = description;
        this.purpose = purpose;
        this.tools = tools;
        this.image = `assets/${name}/image.png`;
        this.urlGit = urlGit;
        this.urlProject = urlProject;
    }
}
