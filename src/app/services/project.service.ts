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
            'https://github.com/icepick4/Sonic-Game',
            'https://github.com/icepick4/Sonic-Game/archive/refs/heads/main.zip'
        ),
        new Project(
            2,
            'League Viewer',
            'This project is a web application that allows users to search for League of Legends champions and visualize their skins, lore and names.',
            "This project was created to learn the famous framework, Angular. I choose to fetch League of Legends datas because it's one of my favourite game ! Moreover, I had to learn how to use the Riot Games API to get the data. It was a great learning experience, mostly because it was my first JavaScript framework.",
            ['Angular', 'TypeScript', 'SCSS', 'Riot Games API'],
            'https://github.com/icepick4/league-viewer',
            'https://icepick4.github.io/league-viewer/'
        ),
        new Project(
            3,
            'Daily steam stats',
            'This project is a twitter bot that tweets daily stats about the steam platform. The bot tweets stats about trending games, most played games, and highest peak players. Ths bot is hosted locally on my TrueNAS server with a Docker container.',
            'I created this project to share data about video games, I had to learn how to use Tweepy to create a twitter bot and how to host my project on a local Nas server with docker.',
            ['Python', 'Tweepy', 'Docker', 'Scraping', 'Nas server'],
            'https://github/icepick4/daily-steam-stats',
            'https://twitter.com/DailySteamStats'
        ),
        new Project(
            5,
            'Graph map analysis',
            'This project is an application to study the graph map of an imported csv or txt file, with many options to analyze the data.',
            'This project was created as part of my studies in the university. The main goal was to learn how to use the Graph Theory to solve problems especially with the shortest path algorithm and let the user interact with the graph map.',
            ['Java', 'Graph Theory', 'Swing', 'Path finding algorithms'],
            'https://github.com/icepick4/graphe-values',
            'https://github.com/icepick4/graphe-values/raw/main/graphe-values.jar'
        ),
        new Project(
            4,
            'Tower of Hanoi',
            'This project is a game inspired by the Tower of Hanoi. The game is a simple puzzle game where the player must move the disks from the first tower to the last one.',
            'That project made me learn TypeScript, I firstly started with JavaScript then switched to TypeScript, I also learnt how to use Three.js (such a great library).',
            ['TypeScript', 'Three.js', 'CSS'],
            'https://github.com/icepick4/tower-of-hanoi',
            'https://icepick4.github.io/tower-of-hanoi/threejs/public/'
        ),
        new Project(
            13,
            'Directory manager',
            'This project is a C application that allows users to manage a digital directory. The application allows users to add, edit and delete contacts. Moreover, the application allows users to search for contacts, filter them and sort them.',
            'This project was created as part of my studies in the university. The main goal was to learn how to use the C language to manage data.',
            ['C', 'Sorting algorithms', 'Searching algorithms'],
            'https://github.com/icepick4/annuaire',
            'https://github.com/icepick4/annuaire/archive/refs/heads/main.zip'
        ),
        new Project(
            11,
            "Rubik's Cube sessions manager",
            "This project is a Python application that allows users to manage their rubik's cube sessions. The application allows users to store their times for each type of cube, and to see their progress instantly. Users can later see overall stats and daily stats that are updated automatically in each session in a local file. So that users can see their progress over time.",
            "I created this project because Rubik's cube is one of my passions, and I wanted to have a tool to manage my sessions and my progress.",
            ['Python', 'Pygame', 'Data management'],
            'https://github.com/icepick4/timer-stats-rubiks-cube',
            'https://github.com/icepick4/timer-stats-rubiks-cube/archive/refs/heads/main.zip'
        ),
        new Project(
            10,
            'Portfolio',
            'This project is a web application that allows users to see my projects and contact me. The application is responsive and works on all devices. Moreover, now my portfolio is fully automated, I can add new projects and they will be automatically added to the portfolio with right badges for each languages, technos. About the hosting, I manage it with an Apache server on my TrueNAS server.',
            'I created this web site to show my projects and be able to share them in a professional way.',
            ['Angular', 'TypeScript', 'SCSS', 'Apache server'],
            'https://github.com/icepick4/portfolio',
            'https://icepick4.github.io/portfolio/'
        ),
        new Project(
            9,
            'Memory game: One Piece',
            'This project is a game inspired by the Memory Game. The game is a simple memory game where the player must find all the pairs of cards. The memory design is inspired by the One Piece anime Universe. You can play either solo or with a friend, with 3 different difficulties (which change the number of cards).',
            'This project was created to practice Typescript and have fun with the One Piece Universe and creating a game !',
            ['TypeScript', 'HTML', 'CSS'],
            'https://github.com/icepick4/Memory-One-Piece',
            'https://icepick4.github.io/Memory-One-Piece/public'
        ),
        new Project(
            7,
            'TchouTchou',
            'This web site allows you to create an account and buy tickets for any train station in France. You can also see the train schedule and the train status and many other features like contact services and more.',
            'This project was created as part of my studies in the university. The main goal was to create an application managing a Database. So we decided to create a train station application.',
            ['PHP', 'Oracle', 'HTML', 'CSS', 'JavaScript', 'Docker'],
            'https://github.com/icepick4/TchouTchou',
            'http://tchoutchou.ovh/'
        ),
        new Project(
            12,
            'Connect 4',
            'This project is a game inspired by the Connect 4. The game is a simple game where the player must align 4 disks of the same color. You can play against the computer or against another player.',
            'This game was made with Python and Pygame.',
            ['Python', 'Pygame'],
            'https://github.com/icepick4/Connect-4',
            'https://github.com/icepick4/Connect-4/archive/refs/heads/main.zip'
        ),
        new Project(
            8,
            'PacSida',
            'This project is a game inspired by the Pacman game. We made a simple game where the player must eat all the points and avoid the virus, he can also eat the protections to be invincible for a short time. We created this serious game as a team of 5 during a special event that took place in the whole France at the end, we finished at the second place in two challenges : "AXOCapt\'Challenge" (Captcha verification) and "Le chat l\'a attrapée" (accessibility).',
            'It was made by 5 students in one night. The goal was to create a serious game about the Virus Sida during an event called "La nuit de l\'info", you can learn more at this address : https://www.nuitdelinfo.com/. This game was made with the basics HTML, CSS and JavaScript.',
            ['HTML', 'CSS', 'JavaScript'],
            'https://github.com/icepick4/nuit-de-l-info2022',
            'https://ndli.rabec.eu/'
        ),
        new Project(
            6,
            'OnePyece',
            'This project is a Python package that allows users to interact with this API : https://api-onepiece.com/. It is a simple API wrapper that allows users to get data from the One Piece Universe.',
            'This project was created to practice Python and have fun with the One Piece Universe and creating a package for the first time!',
            ['Python', 'PyPi'],
            'https://github.com/icepick4/onepyece',
            'https://pypi.org/project/onepyece/'
        )
    ];

    constructor() {
        this.projects = this.projects.sort((a, b) => a.id - b.id);
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
