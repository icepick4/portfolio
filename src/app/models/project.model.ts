export class Project {
  id: number;
  name: string;
  description: string;
  purpose: string;
  tools: string;
  image: string;
  urlGit: string;
  urlProject: string;

  constructor(
    id: number,
    name: string,
    description: string,
    purpose: string,
    tools: string,
    image: string,
    urlGit: string,
    urlProject: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.purpose = purpose;
    this.tools = tools;
    this.image = image;
    this.urlGit = urlGit;
    this.urlProject = urlProject;
  }
}
