import { Injectable } from '@angular/core';
import { Competence, Level } from '../models/competence.model';

@Injectable({
    providedIn: 'root',
})
export class CompetenceService {
    competences!: Competence[];

    constructor() {
        this.competences = [
            new Competence(
                1,
                'Réaliser',
                [
                    new Level(
                        'Développer des applications informatiques simples',
                        1,
                        [
                            'Implémenter des conceptions simples',
                            'Elaborer des conceptions simples',
                            'Faire des essais et évaluer leurs résultats en regard des spécifications',
                            'Développer des interfaces utilisateurs',
                        ],
                    ),
                    new Level(
                        'Partir des exigences et aller jusqu\'à une application complète',
                        2,
                        [
                            'Elaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences',
                            'Appliquer des principes d\'accéssibilité et d\'ergonomie',
                            'Adopter de bonnes pratiques de conception et de programmation',
                            'Vérifier et valider la qualité de l\'application par les tests',
                        ],
                    ),
                    new Level(
                        'Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...)',
                        3,
                        [
                            'Choisir et implémenter les architectures adaptées',
                            'Faire évoluer une application existante',
                            'Intégrer des solutions dans un environnement de production',
                        ],
                    ),
                ],
                'Développer, c\'est à dire concevoir, coder, tester, et intégrer une solution informatique pour un client.',
                'Elaborer une application informatique, faire évoluer une application informatique, maintenir en conditions opérationnelles une application informatique.',
                [5,12,7],
            ),
            new Competence(
                2,
                'Optimiser',
                [
                    new Level(
                        'Appréhender et construire des algorithmes',
                        1,
                        [
                            'Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données...)',
                            'Comparer des algorithmes pour des problèmes classiques (tri simples, recherche...)',
                            'Formaliser et mettre en œuvre des outils mathématiques pour l\'informatique',
                        ],
                    ),
                    new Level(
                        'Sélectionner les algorithmes adéquats pour répondre à un problème donné',
                        2,
                        [
                            'Choisir des structures de données complexes adaptées au problème',
                            'Utiliser des techniques algorithmiques adaptées pour des problèmes complexes (par ex: recherche opérationnelle, méthodes arborescentes, optimisation globale, intelligence artificielles...)',
                            'Comprendre les enjeux et moyens de sécurisation des données et du code',
                            'Evaluer l\'impact environnemental et sociétal des solutions proposées',
                        ],
                    ),
                    new Level(
                        'Analyser et optimiser des applications',
                        3,
                        [
                            'Anticiper les résultats de diverses métriques (temps d\'exécution, occupation mémoire, montée en charge ...)',
                            'Profiler, analyser et justifier le comportement d\'un code existant',
                            'Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d\'application (imagerie, immersion, intelligence artificielle, jeux vidéos, parallélisme, calcul formel...)',
                        ],
                    ),
                ],
                'Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d\'exécution, précision, consommation de ressources..',
                'Améliorer les performances des programmes dans des contextes contraints. Limiter l\'impact environnemental d\'une application informatique. Mettre en place des applications informatiques adaptées et efficaces.',
                [5, 12],
            ),
            new Competence(
                3,
                'Administrer',
                [
                    new Level(
                        'Installer et configurer un poste de travail',
                        1,
                        [
                            'Identifier les différents composants (matériels et logiciels) d\'un système numérique',
                            'Utiliser les fonctionnalités de base d\'un système multitâches/multiutilisateurs',
                            'Installer et configurer un système d\'exploitation et des outils de développement',
                            'Configurer un poste de travail dans un réseau d\'entreprise'
                        ],
                    ),
                    new Level(
                        'Déployer des services dans une architecture réseau',
                        2,
                        [
                            'Concevoir et développer des applications communicantes',
                            'Utiliser des serveurs et des services réseaux virtualisés',
                            'Sécuriser les services et données d\'un système'
                        ],
                    ),
                ],
                'Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser les systèmes informatiques d\'une organisation',
                'Déployer une nouvelle architecture technique, améliorer une infrastructure existante, sécuriser les applications et les services.',
                [7, 8]
            ),
            new Competence(
                4,
                'Gérer',
                [
                    new Level(
                        'Concevoir et mettre en place une base de données à partir d\'un cahier des charges client',
                        1,
                        [
                            'Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)',
                            'Visualiser des données',
                            'Concevoir une base de données relationnelle à partir d\'un cahier des charges',
                        ],
                    ),
                    new Level(
                        'Optimiser une base de données, intéragir avec une application et mettre en oeuvre la sécurité',
                        2,
                        [
                            'Optimiser les modèles de données de l\'entreprise',
                            'Assurer la sécurité des données (intégrité et confidentialité)',
                            'Organiser la restitution de données à travers la programmation et la visualisation',
                            'Manipuler des données hétérogènes',
                        ],
                    ),
                ],
                'Concevoir, gérer, administrer et exploiter les données de l\'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l\'entreprise.',
                'Lancer un nouveau projet, sécuriser des données, exploiter des données pour la prise de décisions',
                [7]
            ),
            new Competence(
                5,
                'Conduire',
                [
                    new Level(
                        'Indentifier les besoins métiers des clients et des utilisateurs',
                        1,
                        [
                            'Élaborer les spécifications fonctionnelles et non fonctionnelles à partir des besoins du client',
                            'Planifier et suivre les étapes du projet en tenant compte des contraintes',
                            'Assurer le bon déroulement du projet en gérant les risques et en résolvant les problèmes éventuels',
                            'Mettre en place les processus de validation et de recette pour garantir la qualité du produit final.',
                        ],
                    ),
                    new Level(
                        'Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs',
                        2,
                        [
                            'Identifier les processus présents dans une organisation en vue d\'améliorer les systèmes d\'information',
                            'Formaliser les besoins du client et de l\'utilisateur',
                            'Identifier les critères de faisabilité d\'un projet informatique',
                            'Définir et mettre en œuvre une démarche de suivi de projet',
                        ],
                    ),
                ],
                'Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.',
                'Lancer un nouveau projet, piloter le maintien d\'un projet en condition opérationnelle, faire évoluer un système d\'information.',
                [7, 8]
            ),
            new Competence(
                6,
                'Collaborer',
                [
                    new Level(
                        'Identifier ses aptitudes pour travailler dans une équipe',
                        1,
                        [
                            'Appréhender l\'écosystème numérique',
                            'Découvrir les aptitudes requises selon les différents secteurs informatiques',
                            'Identifier les statuts, les fonctions et les rôles de chaque membre d\'une équipe pluridisciplinaire',
                            'Acquérir les compétences interpersonnelles pour travailler en équipe',
                        ],
                    ),
                    new Level(
                        'Situer son rôle et ses missionsau sein d\'une équipe informatique',
                        2,
                        [
                            'Comprendre la diversité, la structure et la dimension de l\'informatique dans une organisation (ESN, DSI, ...)',
                            'Appliquer une démarche pour intégrer une équipe informatique au sein d\'une organisation',
                            'Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique',
                            'Rendre compte de son activité professionnelle',
                        ],
                    ),
                    new Level(
                        'Manager une équipe informatique',
                        3,
                        [
                            'Organiser et partager une veille technologique et informationnelle',
                            'Identifier les enjeux de l\'économie de l\{innovation numérique',
                            'Guider la conduite du changement informatique au sein d\'une organisation',
                            'Accompagner le management de projet informatique',
                        ],
                    ),
                ],
                'Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.',
                'Lancer un nouveau projet, organiser son travail en relation avec celui de son équipe, élaborer, gérer et transmettre de l\'information',
                [7, 12, 5, 8],
            ),
        ];
    }

    getCompetences(): Competence[] {
        return this.competences;
    }

    getCompetenceById(id: number): Competence {
        return this.competences[id-1];
    }
}