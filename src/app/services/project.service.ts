import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    projects: Project[] = [
        new Project(
            1,
            'Sonic Game',
            'This project is a game inspired by the Dino Game in Google Chrome. The game is a simple endless runner game where the player controls a character that must avoid obstacles. I chose to use a pixel art style for the game, so that I could design some of the assets myself.',
            'This project was created to practice my skills in Pygame and Python. I wanted to create a game that was simple and fun to play.',
            ['Python', 'Pygame', 'Pixel Art'],
            'assets/1/image.png',
            'https://github.com/icepick4/Sonic-Game',
            'https://github.com/icepick4/Sonic-Game/archive/refs/heads/main.zip'
        ),
        new Project(
            2,
            'League Viewer',
            'This project is a web application that allows users to search for League of Legends champions and visualize their skins, lore and names.',
            "This project was created to learn the famous framework, Angular. I choose to fetch League of Legends datas because it's one of my favourite game ! Moreover, I had to learn how to use the Riot Games API to get the data. It was a great learning experience, mostly because it was my first javascript framework.",
            ['Angular', 'Typescript', 'SCSS', 'Riot Games API'],
            'assets/2/image.png',
            'https://github.com/icepick4/league-viewer',
            'https://icepick4.github.io/league-viewer/'
        ),
        new Project(
            3,
            'Daily steam stats',
            'This project is a twitter bot that tweets daily stats about the steam platform. The bot tweets stats about trending games, most played games, and highest peak players. Ths bot is hosted locally on my TrueNAS server with a Docker container.',
            'I created this project to share data about video games, I had to learn how to use Tweepy to create a twitter bot and how to host my project on a local Nas server with docker.',
            ['Python', 'Tweepy', 'Docker', 'Scraping', 'Nas server'],
            'assets/3/image.png',
            'https://github/icepick4/daily-steam-stats',
            'https://twitter.com/DailySteamStats'
        ),
        new Project(
            5,
            'Graph map analysis',
            'This project is an application to study the graph map of an imported csv or txt file, with many options to analyze the data.',
            'This project was created as part of my studies in the university. The main goal was to learn how to use the Graph Theory to solve problems especially with the shortest path algorithm and let the user interact with the graph map.',
            ['Java', 'Graph Theory', 'Path finding algorithms'],
            'assets/5/image.png',
            'https://github.com/icepick4/graphe-values',
            'https://github.com/icepick4/graphe-values/raw/main/graphe-values.jar'
        ),
        new Project(
            4,
            'Tower of Hanoi',
            'This project is a game inspired by the Tower of Hanoi. The game is a simple puzzle game where the player must move the disks from the first tower to the last one.',
            'This project was created to practice Typescript and learn how to use Three.js (such a great library).',
            ['Typescript', 'Three.js'],
            'assets/4/image.png',
            'https://github.com/icepick4/tower-of-hanoi',
            'https://icepick4.github.io/tower-of-hanoi/threejs/public/'
        ),
        new Project(
            9,
            'Directory manager',
            'This project is a C application that allows users to manage a digital directory. The application allows users to add, edit and delete contacts. Moreover, the application allows users to search for contacts, filter them and sort them.',
            'This project was created as part of my studies in the university. The main goal was to learn how to use the C language to manage data.',
            ['C', 'Sorting algorithms'],
            'assets/9/image.png',
            'https://github.com/icepick4/annuaire',
            'https://github.com/icepick4/annuaire/archive/refs/heads/main.zip'
        ),
        new Project(
            6,
            "Rubik's Cube sessions manager",
            "This project is a Python application that allows users to manage their rubik's cube sessions. The application allows users to store their times for each type of cube, and to see their progress instantly. Users can later see overall stats and daily stats that are updated automatically in each session in a local file. So that users can see their progress over time.",
            "I created this project because Rubik's cube is one of my passions, and I wanted to have a tool to manage my sessions and my progress.",
            ['Python', 'Pygame'],
            'assets/6/image.png',
            'https://github.com/icepick4/timer-stats-rubiks-cube',
            'https://github.com/icepick4/timer-stats-rubiks-cube/archive/refs/heads/main.zip'
        ),
        new Project(
            7,
            'Portfolio',
            'This project is a web application that allows users to see my projects and contact me. The application is responsive and works on all devices. Moreover, now my portfolio is fully automated, I can add new projects and they will be automatically added to the portfolio with right badges for each languages, technos.',
            'I created this web site to show my projects and be able to share them in a professional way.',
            ['Angular', 'Typescript', 'SCSS'],
            'assets/7/image.png',
            'https://github.com/icepick4/portfolio',
            'https://icepick4.github.io/portfolio/'
        ),
        new Project(
            8,
            'Memory game: One Piece',
            'This project is a game inspired by the Memory Game. The game is a simple memory game where the player must find all the pairs of cards. The memory design is inspired by the One Piece anime Universe. You can play either solo or with a friend, with 3 different difficulties (which change the number of cards).',
            'This project was created to practice Typescript and have fun with the One Piece Universe and creating a game !',
            ['Typescript'],
            'assets/8/image.png',
            'https://github.com/icepick4/Memory-One-Piece',
            'https://icepick4.github.io/Memory-One-Piece/public'
        ),
        new Project(
            10,
            'TchouTchou',
            'This web site allows you to create an account and buy tickets for any train station in France. You can also see the train schedule and the train status and many other features like contact services and more.',
            'This project was created as part of my studies in the university. The main goal was to create an application managing a Database. So we decided to create a train station application.',
            ['PHP', 'Oracle', 'HTML', 'CSS'],
            'assets/10/image.png',
            'https://github.com.icepick/sae-sncf',
            'http://tchoutchou.ovh:8080/'
        ),
        new Project(
            11,
            'Connect 4',
            'This project is a game inspired by the Connect 4. The game is a simple game where the player must align 4 disks of the same color. You can play against the computer or against another player.',
            'This game was made with Python and Pygame.',
            ['Python', 'Pygame'],
            'assets/11/image.png',
            'https://github.com/icepick4/Connect-4',
            'https://github.com/icepick4/Connect-4/archive/refs/heads/main.zip'
        ),
    ];

    constructor() {
        let sortNames: string[] = [
            'Sonic Game',
            'League Viewer',
            'Daily steam stats',
            'Tower of Hanoi',
            'Graph map analysis',
            "Rubik's Cube sessions manager",
            'TchouTchou',
            'Memory game: One Piece',
            'Portfolio',
            'Connect 4',
            'Directory manager',
        ];
        this.projects.sort((a, b) => {
            return sortNames.indexOf(a.name) - sortNames.indexOf(b.name);
        });
    }

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
