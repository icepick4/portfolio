import { Injectable } from '@angular/core';
import { About, Type } from '../models/about.model';

@Injectable({
    providedIn: 'root',
})
export class AboutService {
    infos!: About[];

    constructor() {
        this.infos = [
            new About(
                'Javascript',
                'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E',
                Type.Language
            ),
            new About(
                'Typescript',
                'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
                Type.Language
            ),
            new About(
                'Angular',
                'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white',
                Type.Language
            ),
            new About(
                'Java',
                'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white',
                Type.Language
            ),
            new About(
                'Python',
                'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
                Type.Language
            ),
            new About(
                'C',
                'https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=black',
                Type.Language
            ),
            new About(
                'HTML',
                'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
                Type.Language
            ),
            new About(
                'CSS',
                'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
                Type.Language
            ),
            new About(
                'SCSS',
                'https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white',
                Type.Language
            ),
            new About(
                'PHP',
                'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white',
                Type.Language
            ),
            new About(
                'MySQL',
                'https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white',
                Type.Tool
            ),
            new About(
                'Visual Studio Code',
                'https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white',
                Type.Tool
            ),
            new About(
                'Git',
                'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white',
                Type.Tool
            ),
            new About(
                'GitHub',
                'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white',
                Type.Tool
            ),
            new About(
                'Linux',
                'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black',
                Type.Tool
            ),
            new About(
                'Arch Linux',
                'https://img.shields.io/badge/Arch_Linux-1793D1?style=for-the-badge&logo=arch-linux&logoColor=white',
                Type.Tool
            ),
            new About(
                'Windows',
                'https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white',
                Type.Tool
            ),
            new About(
                'Skateboarding',
                'https://img.shields.io/badge/Skateboarding-000000?style=for-the-badge&logo=skateboarding',
                Type.Hobby
            ),
            new About(
                'Programming',
                'https://img.shields.io/badge/Programming-000000?style=for-the-badge',
                Type.Hobby
            ),
            new About(
                'Gaming',
                'https://img.shields.io/badge/Gaming-000000?style=for-the-badge',
                Type.Hobby
            ),
            new About(
                'Computer Science',
                'https://img.shields.io/badge/Computer_Science-000000?style=for-the-badge',
                Type.Hobby
            ),
        ];
    }

    getAllAbouts() {
        return this.infos;
    }

    getAllLanguages() {
        return this.infos.filter((info) => info.type === Type.Language);
    }

    getAllTools() {
        return this.infos.filter((info) => info.type === Type.Tool);
    }

    getAllHobbies() {
        return this.infos.filter((info) => info.type === Type.Hobby);
    }
}
