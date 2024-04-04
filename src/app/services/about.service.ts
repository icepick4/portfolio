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
                'JavaScript',
                'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E',
                Type.Language,
                'https://www.javascript.com/'
            ),
            new About(
                'TypeScript',
                'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
                Type.Language,
                'https://www.typescriptlang.org/'
            ),
            new About(
                'Angular',
                'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white',
                Type.Language,
                'https://angular.io/'
            ),
            new About(
                'Java',
                'https://img.shields.io/badge/JAVA-ED8B00?style=for-the-badge&logo=data:image/png;base64,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&logoColor=white',
                Type.Language,
                'https://java.com/fr/'
            ),
            new About(
                'Python',
                'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
                Type.Language,
                'https://www.python.org/'
            ),
            new About(
                'Pygame',
                'https://img.shields.io/badge/Pygame-2950C9?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABaCAMAAAD+feq9AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADbUExURfr9AAD8bADibwGAX55uI9jMANvQAD1NKQD3bQDrbgDmbwCHYCk9I/j5AN7VANXHAO7sABcxH6F0IamBGgCQYQDwbc26AgDcbvPzAADMawDVbenkAACeZACpZtHBAOTdAKV6HgDBacavBbeXEACAX55vI66HF72hCwCAX55vIwC2aJ5vI55vI7GNFACAXwCAXwD9bJ1vIwCAX51vIwCAX5pvJQCAX55vI55vI55vI55vIwGAXiZ8TwCAX41yKmd1OACAX0Z5RFl3Pnh0MgCAXwCAXwD+bEdwTEdwTJRvMPwAAABJdFJOU/////////8D/////wj/////Df///////////////////////+3W///CPf8Zkv8ZMP+/1qlhJql6+O9ZR/93//+I////nI//AACfdJxPAAAHSUlEQVRYw92ZaXeiWBCGkQuisriiqIjihrtRo3Fpu7N05vT//0VTdUG8qODSzpcpTqJJTp5T1vJWXeD+/BfG/S+p2Yn0NKqye99P8HXfm6+mT6JK74SQHtBeCb6ZPIe6axOZkJUy6ZFCjZDX51DfiVyukfYU6INSgXw/h/qbyJUy+AgBKFdk8v4c6h58BVqv59JXu930llKIpkrgow2fHKxQGuBLuz1f7afSX1Cl6apNyIA3iSwXanxNlmVCrf17+jA1u2+jjwO+XK5USiW+VKmUy/bALAB7/qo8Rp38JkQ27VIqqSc805MpnudLZRO4e+kRahagBTulJ2Kx2EvsYIkkj2YXSPv1ESrkySzpsTNLoLupcoHMp/dTJ3NSqCRfXC9f/nmJnbhry1GNFkKVoFDh41eSFJq0+dgJFsrtt3QvNduDz5+0iYlhTdRIIcV6i87WSC97L3UKfc/rtlyjyRoEqTF0dgDq8ADVTiUSvE5hiVKSTdiLjoEl7d1jVD9LLy/BOsAqiEpXRARSiViIYXVFKhgXWlg1Xg+jYmAjiyCsslZQrqkka4kz6gq0QFIU6UaqlJ3sCamVQVKOxgYEi8AkPUXZLmazxdvyGlWa7F7fV705ypVcME2z5tmADYjuUpejtYDWeRtGUSevK8qjBnIqF6ihsBYqJ9QamS8EIZcf53OCMOuHUqXXnksrmLWBbaOsgq6WQFdBWCtsBFwq+SnknLSYbnbB3X4IdfINbpo1u1zBcKZSgWTpOpstl/rjp9AS0dJOTpgNL1JxoSjYFIiMRGi1MtRcE5jxuCg6gjCSLlFf28SsUGQU71gDQBVyRVGsGkZVS7eEzfYClQoqzyevI8FStAZ+CA1L1FSO4wzNygsL5ZwKBWrzEe10ogPYBR9C3qNyRtwRNv0zqoKCeiOUhhXUBahpj6pWiw0mshwrqMnboHR02YR8Cl3IlcFRZ8Wx0FmeUnGR8tT0plxBWMmXMPapqtYU1ttTKix/ldT1TL0cpiEIIaHlSqkQhbrFhIA7alTpNACJc9N1dyHAzvoQBMf3latCCGZKkIrJCuQK95QUH2oDGQOATXDwNQOd4AeWO85UNqyJCKK7DUC1YmH5vhpxCGw/SJ0EqdHQSg2hXzQAWFl4QSMUc8I20lfdJ9BF0LUKtbJt0n0ToF3LpXpFgOk6yVYgrp6rpTKslSiuB6NSS7X34yd8/iLqVZ2GFYsgDU0rndaAeawBupzwZVMmF+3HJzA9qJjhuPMiONTrN1tZ+iEjQPj4/EXt8/PzA+zz1xcicw3HolDRcF1VoQhaQmcYpO6xC9jmqRQwIz9xhnTR8vlGIwfWaDTyY6fpMcW6evD1EhU71u8td49CrRfyTtFKU7OsIjXLSkM9edB45uDqRSquQHwiIJ/kF6S5KEZZ3I/qZSq7rGAJgHyCq3SChCK1uu+pitk6p9Ii0ANrFDRPN+3+f72aOTdD5VijNZA9mQUoWskjlYoybR5Rq578v28qe2nn9QqnazivpQLUTzrsRM3gbjEjDtPg7URfJQis6aWLUjFZDcvXpKtXVWRk+zi5v+EgrPs1YCMVxhJTkJGWiTPJOlIlZhFOetSx15HXXTU0sXg+C1C4cWV11wGX+uUPkGumZjQxPWZGN7MR7dpQsugtxnWAVMeXz7ALkQYwYdUSLkxudPYbj+2wEqUOG58TGVZVVQ0jU61j9xZbgf2N3TRhIMgDT6wL2ATNo3zSCxjVah0u/Fava5qGRKvYbDVghV2GbMW7Od3bATrAHSJHqb6zah0UJu0bqk2z6bToVixsRsvQXRuxMiztIC3zGW2Co69cJj0GFXR18aCMdIEX1p1RX4o4F9B7IvSG2G7hUY8Cmm7lfWtQ4HrT6cBpoz+8ctpQpu+9+by3n0iLU1+NeJr5/MXmGLLeHw6z0h/p6slI+pOdTEB6PKrG1EBGYy0OM3Uh3XvfZeRT/eJUWaN6uryX+kapbG+pJyLVZBfhG6lbdxIYjK/el/ve0Jq59d3U/ga7QMwEfFUzrsOqoT5GXXboKKizTZ9x8kXqr9UtZth17WZqdkaVMCBa1YbQpSreEpzHsgVFkLfEgGpxarwZp0VRL1a14iOVdUhXiGzh+A8rgSgqBNZb+wxWT91KyMTh7DpSHrhT+rb2dpd4NeiualTTIKhhUY2mKiNBaDhFdyfIGIbq6XRVs5z86eH99nvF2dEGuLABFunGhs0fT1ticwwiHVDpO+9rbxcbuq2CrI4d0RmPu/kxjqj12U2R+55t9EedjavNLbGLLw0LjhWRzBuew0jSsL99G81g6YJFqoMTwjquPn/5dAcVzAIft2uhyaxpf0/FT75dboSW9TTqdp1r4XaiwIjIH49rf0kdzjBTsJ30O1hVwyc9NevPNpsRwpajxZUKuOdZ3LC/VA4D85nPDaXgG+nSnx5+GqkoWQXN/S65790f6E9Z5SFqNtzcv0mPPDmVXFPg64/7IklZ/1f4238BS+HYriWG4OEAAAAASUVORK5CYII=',
                Type.Language,
                'https://pygame.org/'
            ),
            new About(
                'C',
                'https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=black',
                Type.Language,
                'https://www.cprogramming.com/'
            ),
            new About(
                'HTML',
                'https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white',
                Type.Language,
                'https://www.w3schools.com/html/'
            ),
            new About(
                'CSS',
                'https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white',
                Type.Language,
                'https://www.w3schools.com/css/'
            ),
            new About(
                'SCSS',
                'https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white',
                Type.Language,
                'https://sass-lang.com/'
            ),
            new About(
                'PHP',
                'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white',
                Type.Language,
                'https://www.php.net/'
            ),
            new About(
                'Tailwind CSS',
                'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
                Type.Language,
                'https://tailwindcss.com/'
            ),
            new About(
                'Kotlin',
                'https://img.shields.io/badge/Kotlin-BA55D3?style=for-the-badge&logo=kotlin&logoColor=white',
                Type.Language,
                'https://kotlinlang.org/'
            ),
            new About(
                'Symfony',
                'https://img.shields.io/badge/Symfony-000000?style=for-the-badge&logo=symfony&logoColor=white',
                Type.Language,
                'https://symfony.com/'
            ),
            new About(
                'Vue.js',
                'https://img.shields.io/badge/Vue-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D',
                Type.Language,
                'https://vuejs.org/'
            ),
            new About(
                'Nuxt',
                'https://img.shields.io/badge/Nuxt-00C58E?style=for-the-badge&logo=nuxt.js&logoColor=white',
                Type.Language,
                'https://nuxt.com/'
            ),
            new About(
                'Node.js',
                'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white',
                Type.Language,
                'https://nodejs.org/'
            ),
            new About(
                'React',
                'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
                Type.Language,
                'https://reactjs.org/'
            ),
            new About(
                'MySQL',
                'https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white',
                Type.Tool,
                'https://www.mysql.com/'
            ),
            new About(
                'MongoDB',
                'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white',
                Type.Tool,
                'https://www.mongodb.com/'
            ),
            new About(
                'Prisma',
                'https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white',
                Type.Tool,
                'https://www.prisma.io/'
            ),
            new About(
                'VS Code',
                'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white',
                Type.Tool,
                'https://code.visualstudio.com/'
            ),
            new About(
                'Netbeans',
                'https://img.shields.io/badge/NetBeans_IDE-5AA354?style=for-the-badge&logo=apache-netbeans-ide&logoColor=white',
                Type.Tool,
                'https://netbeans.apache.org/'
            ),
            new About(
                'Git',
                'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white',
                Type.Tool,
                'https://git-scm.com/'
            ),
            new About(
                'GitHub',
                'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white',
                Type.Tool,
                'https://github.com'
            ),
            new About(
                'GitHub Actions',
                'https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white',
                Type.Tool,
                'https://github.com'
            ),
            new About(
                'Vercel',
                'https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white',
                Type.Tool,
                'https://vercel.com/'
            ),
            new About(
                'Docker',
                'https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white',
                Type.Tool,
                'https://www.docker.com/'
            ),
            new About(
                'Linux',
                'https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black',
                Type.Tool,
                'https://www.linux.org/'
            ),
            new About(
                'Arch Linux',
                'https://img.shields.io/badge/Arch_Linux-1793D1?style=for-the-badge&logo=arch-linux&logoColor=white',
                Type.Tool,
                'https://archlinux.org/'
            ),
            new About(
                'Windows',
                'https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white',
                Type.Tool,
                'https://www.microsoft.com/en-us/windows'
            ),
            new About(
                'Android Studio',
                'https://img.shields.io/badge/Android_Studio-3DDC84?style=for-the-badge&logo=android-studio&logoColor=white',
                Type.Tool,
                'https://developer.android.com/studio'
            ),
            new About(
                'Skateboarding',
                'https://img.shields.io/badge/Skateboarding-000000?style=for-the-badge&logo=data:image/png;base64,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',
                Type.Hobby,
                'https://biomeskateboard.fr/'
            ),
            new About(
                'Programming',
                'https://img.shields.io/badge/Programming-FFF?style=for-the-badge&logo=data:image/png;base64,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',
                Type.Hobby,
                'https://github.com'
            ),
            new About(
                'Gaming',
                'https://img.shields.io/badge/Gaming-2950C9?style=for-the-badge&logo=data:image/png;base64,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',
                Type.Hobby,
                'https://www.leagueoflegends.com/fr-fr/'
            ),
            new About(
                'Computer Science',
                'https://img.shields.io/badge/Computer_Science-CC6699?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFklEQVR4nO2dv4skRRTH6zKNVITD5PAHu5guGE5wuQaXGZnsBaLBcoEGCwfHgIlc5IKCCjfZ/AEbCMKGGy0YGRh5sIkGMuGlovUYh2tr3lTVbNV2VVd9PvBNbt+7qar+MLPV29NtDAAAAAAAAMAoHNgsnJwEes6UHh/HSv2Rp/5IqT8OvIZbfxaoP1F6DgI9TTKz+cfJeaBnpfT4WCj1Dzz1D5T6kGRu/SpQf670zAI9TYIACIAABgEQwCAAAgR6mgQBEAABDAIggEEABAj0NAkCIAACGARAAIMACBDoaRIEQAAEMAiAAKZxAQ5tHio5tbl0stxRu8mF0uOrXyj1c0/9XKlfBF7Drb8I1C+VntMdtYd7r3aFyERc40lcHt5gvasDARCg+EJONQjQeZoV4MrmKflfrpR1Ki6AXK48S4z8hutO7OmYk5gIsibuOsnapa5/0iXn2j5631wq/4YA22gCaGu3b0LnMbyMLcAdmzdTBjxhuhdADr58q+ba5t2UQU+UrgXYHPzNz69NfxJUKYB8j+08MUtlUEMB3IPfqwSaALJ2qesf+r7lraNtA4cCyGf+c6VG8tmoIy2LJkDxbWAOQgII92x+d2oejzjGGuhaAGEoQW8HX+heAEEk6OltfwgCFOBDm08z5BOb+zavJowFAQrws0nfZg3zwuY7m7s3GAsCFCC3AJv8YfPBnmOpUgDZn68SI5dI9SaA5C+bd/YYiyaArF3q+ofuWeSl9T8G3aYAktBFrkOqPBPYugDyFvt1hnxv1m/72vzfjxwLAkyc12x+M9tzfRTZjwAN8LnZnus3kb1VCpCDmncBudG+WPIssrfKXUAOECAOBGgABFBAgDgQoAEQQAEB4kCABmhOAO1++zcJAoTRBMix9qHnHXjhRNB+5Bag+IkgBNgPBIicBAJsgwAN0JwAR/9NKiVzZVAIsI0mwNykr7/vIVmjwDYwjiq3gTlAgDgQoAEQQAEB4kAAhSc2vzi5fwtjzMXrZn05+DBvR/YigMIzpdd3q9cpU6UApbeBvQswN4W3gaVPBPUuQPETQQgwHgiggAAIgACJSRKg9AUhvQtQ/IKQHLANjKPKbWAOECAOBFBAgAZAgDgQQAEBGgAB4kAABQQoDCeCxqPKE0EIMB4IoPCj0vtxyoQqBgEUvlJ6f0iZUMVUKUDpG0V+pPT+bdaXir1n80aG1EKVN4rMQcou4BWbP5X+nKmFKncBOUi9KvhY6UeACZHjsvBvlf8DASZCru8FfGHWt2OfsgDyMIx7O36GABG8ZfOlzU82v5r1w6ZSMxYisMz92uhPQ0OAhtkc/E2uzbYECNAo8ravffTIu8/wMblVCjDGgyNbR3sknkRuMX9nUFflgyNLnwlsBVcC9+ALVZ4JRIB8bCTQDr6AAB0gn/nawRcQoHOqFODAZpaYU2VQCLCNJoCsXer6H4w5CQ1tG3hl1hMmL3OlrFPxbWAONAFIXBCg8yBA50GAztOEAIdmPRE38hvupZPljtpNLpQeX/1CqZ976udK/SLwGm79RaB+qfSc7qg93Hu1J4RsUVzjQ8/aXSk9PrTzGL7LyrX7/IX20W79KlB/rvTMAj1NggAIgAAGARDAIAACBHqaBAEQAAEMAiCAQQAECPQ0CQIgAAIYBEAAgwAIEOhpEgRAAAQwCIAAplMB5HJl9972oe+xnSk9PrTnHfgeonSk1Ifut+/Wh+7Jc6L0FL90GwAAAAAAALrgX6GTTq++tzCcAAAAAElFTkSuQmCC',
                Type.Hobby,
                'https://github.com/icepick4'
            ),
        ];
        //sort with title, shortest first
        this.infos.sort((a, b) => a.title.length - b.title.length);
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

    getImageTool(title: string) {
        for (const info of this.infos) {
            if (info.title === title) {
                return info.image;
            }
        }
        return `https://img.shields.io/badge/${title}-${this.getColor(
            title
        )}?style=for-the-badge&logo=data:image/webp;base64,UklGRs4AAABXRUJQVlA4TMEAAAAvn8AnEE+gFpIkaDGefP3DpTiDMziAU1ETSQpDlUUw6EAsNmOhJAAaBksBNP1TrMnXyzD/AYCwG+Uz0UlBrTMWttv9A6vIVutgAQuxgAUsYAELsRAL0Xv6br/IdCai/xMgP5ft+hWgsXNwHhxsNDpL3majnp0Hg8m6d61xcFK5DBidyY1BZfEzBpNC5WTxMzqTcnAFMAaTcnZjsOQZnUm5dKOz2hmDSblZKTeXMqMzKe8vZcZgUt5fz/KgfGQ9WxUBAA==`;
    }

    getUrlTool(title: string, projectUrl: string) {
        for (const info of this.infos) {
            if (info.title === title) {
                return info.url;
            }
        }
        return projectUrl;
    }

    getColor(name: string) {
        //get unique color for each name
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 10) - hash);
        }
        let color = '';
        for (let i = 0; i < 3; i++) {
            const value = (hash >> (i * 8)) & 0xff;
            color += ('00' + value.toString(16)).slice(-2);
        }
        return color;
    }

    getAllHobbies() {
        return this.infos.filter((info) => info.type === Type.Hobby);
    }
}
