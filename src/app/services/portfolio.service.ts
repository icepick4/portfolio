import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
    providedIn: 'root',
})
export class PortfolioService {
    projects: Project[] = [
        new Project(
            1,
            'Sonic Game',
            'This project is a game inspired by the Dino Game in Google Chrome. The game is a simple endless runner game where the player controls a character that must avoid obstacles.',
            'This project was created to practice my skills in Pygame and Python. I wanted to create a game that was simple and fun to play.',
            ['Python', 'Pygame'],
            'assets/1/image.gif',
            'https://github.com/icepick4/Sonic-Game',
            ''
        ),
        new Project(
            2,
            'League Viewer',
            'This project is a web application that allows users to search for League of Legends champions and view their skins, lore and names.',
            'This project was created to learn the famouse Angular framework. Moreover, I had to learn how to use the Riot Games API to get the data.',
            ['Angular', 'Riot Games API'],
            'assets/2/image.gif',
            'https://github.com/icepick4/league-viewer',
            'https://icepick4.github.io/league-viewer/'
        ),
        new Project(
            3,
            'Graph map analysis',
            'This project is an application to study the graph map of an imported csv or txt file, with many options to analyze the data.',
            'This project was created as part of my studies in the university. The main goal was to learn how to use the Graph Theory to solve problems especially with Java.',
            ['Java', 'Graph Theory'],
            'assets/3/image.gif',
            'https://github.com/icepick4/graphe-values',
            'https://github.com/icepick4/graphe-values/raw/main/graphe-values.jar'
        ),
        new Project(
            4,
            'Tower of Hanoi',
            'This project is a game inspired by the Tower of Hanoi. The game is a simple puzzle game where the player must move the disks from the first tower to the last one.',
            'This project was created to practice TypeScript and learn how to use Three.js.',
            ['TypeScript', 'Three.js'],
            'assets/4/image.gif',
            'https://github.com/icepick4/tower-of-hanoi',
            'https://icepick4.github.io/tower-of-hanoi/'
        ),
        new Project(
            5,
            'Management of a digital directory',
            'This project is a C application that allows users to manage a digital directory. The application allows users to add, edit and delete contacts. Moreover, the application allows users to search for contacts, filter them and sort them.',
            'This project was created as part of my studies in the university. The main goal was to learn how to use the C language to manage data.',
            ['C'],
            'assets/5/image.gif',
            'https://github.com/icepick4/annuaire',
            ''
        ),
        new Project(
            6,
            "Management of your rubik's cube sessions",
            "This project is a Python application that allows users to manage their rubik's cube sessions. The application allows users to store their times for each type of cube, and to see their progress instantly. Users can later see overall stats and daily stats that are updated automatically in each session.",
            "I created this project because Rubik's cube is one of my passions, and I wanted to have a tool to manage my sessions and my progress.",
            ['Python', 'Pygame'],
            'assets/6/image.gif',
            'https://github.com/icepick4/timer-stats-rubiks-cube',
            ''
        ),
    ];

    getProjectById(id: number): Project {
        const project = this.projects.find((project) => project.id === id);
        if (project) {
            return project;
        }
        throw new Error('Project not found');
    }

    getProjects(): Project[] {
        return this.projects;
    }
}
