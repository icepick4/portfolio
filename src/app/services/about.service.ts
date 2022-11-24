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
                'Netbeans',
                'https://img.shields.io/badge/NetBeans_IDE-5AA354?style=for-the-badge&logo=apache-netbeans-ide&logoColor=white',
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
                'https://img.shields.io/badge/Skateboarding-000000?style=for-the-badge&logo=data:image/png;base64,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',
                Type.Hobby
            ),
            new About(
                'Programming',
                'https://img.shields.io/badge/Programming-FFF?style=for-the-badge&logo=data:image/png;base64,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',
                Type.Hobby
            ),
            new About(
                'Gaming',
                'https://img.shields.io/badge/Gaming-2950C9?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAMj0lEQVR4nO1de4xWRxVvq21ja0wa+5IVjRID1VIey3N5Lywsyy7LAkvCsjwXFhbdgIHqPyCkmuo/tmV3y7K8NzFsjDaArEZtTXnaPyRtFB9VY1HURIPWCoVSeVzP78s327uXe+/Mnce9+y3nl5zsx3fvzJz5nXNnzpmZ73LXXQwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwG4w5AVVXVF0ieIzlXWVl5if56cUL3XCb5NckL1dXVQ7PWv69jzpw5TxJXz+c5S8Lv87CNM8Vqa2vvo0ZaSW7IlIpR9ibJzvLy8vudKVqgAL/E0YuG/N6AjVCXVeUaGxvvpYp/qqtYiLzKTvAB8g/Xzyzy+4pVJyDlWiwqJ7x1pzUFCxx48h3w22JFuYqKiieCwxL925s1a5Y3bdo0b8KECd64ceO80aNHe6NGjcoJPo8dOzZ3berUqbl7USY4HXBM0DPnh/IL7sAhuIziFzaI4PeGlZiAKvm2qJScIafUmDFjvOLi4kQCpadMmeJRh/2K7rDAYUEDwbHgA9yAI3CVlF/YBLaBjXz8PmdDwV9CscmTJ+e8L6liQUEdkyZNEo7wWwscFjQQwYMLcGKLX9gqz+85YwVLS0uv6Hikyogwffr0axY4LGjMmDHjPYf8XtVWjIaiD1NFO20rFhR4a3D+SiJFRUXegAEDMhNd3VEOfXfN78iRI9thy0TGp6DuI1T4B66VE1JSUqJNZCE6AMqgz2nxS9JN8oCS8Sl//BDd/FKKyhk5QaE5QAbG73ECpZGAgoi9GSiXEwyJ/d0B0hj2o4RsezDW+HRTnU7FFMh4u3bt8k6dOuWdPn3a27t3by4K1a2rvzoA+qbDCQVz3u7du3PcQvbs2ePNnj1b1xGWhRp/6NChD5GHXNQx2PHjx72zZ8/2kpMnT3plZWU6XhpcK+gXDoD7dKJ9GB9chvGLaxoO8DbJw7c5AEWLrToe1d7efptyQuCpOnUiJ+5vDoA+6XCBJz+KX1zTHAXaehmfPPNxcoCrOpWdOHEiUsEzZ85oKYhRILCiVdAOgBFNd5EHQ75tfkmuDRs2rMj/9H9dsyInDgDBkmh/cQD0RZcHRw4AeVbY/25ygLd0K4obovbv36+tINa2+4MD4LrO3okQTKO2p9i8/A0pP57+YoNKctFo2CiAjEA3ExCCXa5CdwD0wZTfsCAQnBtkAkLGIPX7imElPWkghisMS0gDMYeb1ovdrUJ3APTBlAeRBoJbiGEa6JevwgG+q2pg3Txftzz2u2UOMHDgwMyMj7Zl+k2cOFHZwLp5PvjVKU+j//cwBbwhq9wkzzcpj4MmMoIHDRqUmQOgbZl+OLghM75Jnm9Y/ldwgH/E3WSa58eVl+WxWDiRETx8+PDMHGDEiBFS/WSLP6Z5flz5jo4OWfmLmALejbvJNM2LK4/hSlZeRjBGmCziALSpsmwty/9N07y48gr8XoMDXClkB8hqFECbKrr1eQeQTQGmeX5cedkUojIFiFx7yJAhqRl/8ODBykvAsinANM+PK4/AW1L+ojQIjMrzEWSoRPJR5fGdjSDQ7wR4Kl1OB6gbbSTZAZQFgVF5Pr5TieTj1gmUgsBixTQQwZxI4/BUJ9na1C2vkgaGxQQwEiJ0Gyki6kBdqDPpVnWSNBABm0jj8OQm2enTLS/SwKdVG1JRAPPWvn37jFcBhePU19d7K1eu9FavXu01NjbmBJ/xHa4tWrTIq66uTmwYU5k7d26ubZl+OlviYTxgqBcLQbYW2oqxEGS6FAzloqaImTNnGim4ZMmSHlLjZM2aNd7SpUu9mpoa54ZHGzAs2lTRDX0w5TdqiNc9YCKEAtTRxptBLs4DQDD/qxAcRjieThdPvKpDBp1z/Pjx2jw4Og8A+QvZ/h5xFOwZ3YpcbQdjiNNxAMiKFSusTgvz5s3zVq1apa2PyXSYxnZw7kAIfXG9rzgAcmcYUZdwSENDgzd//vxQgy5YsMDbsGGDt3Xr1pxs3LjRq62tDb0Xdfjndx1BPKD74w/DPD9KbvQ6EAJQxP2mTmUI/qIURDCoU2d5ebkR4X4nCI4EMP6WLVu87du39xI4Aq4Fn3xT4wtBn3S4cDEFlJSU/OG2M4GUT76ic3Ahbp1AJ1KFDibDbdjT548J8OQHjS8E1/xzPsra0gPOKFsTiOLX5nkAjERkl1dvc4DKyspf6KYswTwfwZ9umoKh2BbpQhYvXtxjWDzpUQ6Aa+K+uro663osXLhQi5Ngno8nX5df2Ips/XqYA5xHx7P84ULY0L9p0yavpaXF6+rq8o4ePeodOXIk9xnfbd68WYl4ROJiKlBxAKR6qkb16wfd/Prhmq2pwIaIH96QrS+EOcBl4f1YgUtbudLS0l659bp167zW1lbv2LFjXnd3d6S0tbXl7pUZCrk7+oaATzYF4F5ZfUK/ON0guCeon+Z5fiPxr6qSrXv/ahjv6wlGv2k6AYzvD7ZA2MGDB6XkCuns7JQ6AZwL8zqmmLAgEN8hCMQ9skUetHXgwAFl/XCvXz/0FX1O0/ghbxD54MeilKcWhaVAaUwHGBKDhKs8WWEjgeypxdJtWBqIzyIDwD2yenT0Q5mgQ6YxHUT93pIc4FM9DkBfPBW1CILA0ORYc5QgIg4L+DBvyob9KJHFBGIaiBPZ8K+rH8qExQTgQCc7kAmifdguZmVzhN8BSuNIEa+IsaUY0hekRWEE79ixQ8v4EAReccbD4pLMAWSpH9qwrR+4wGhg400hgVfExEmZ3wEWqSyJIvXAr1x0RgTxEqNly5bFEnzo0CFtghF9x9WNuVfWR9nCD9pwpd/y5cu1X8IV8ZKoOFnsd4AmxUJi/sh5rP81ceIVZkLwnXiNGe4VQYgswEIapUsw0kTZ/C3rW1/Qz4TfBNLsd4CtCQtri4zgw4cPaxMM47h2gKz1syjb/WsAL6TVcNTcz1OAmn62BO8U9o8A30mrYdkun4sgS4iNINAkSEXZuLrRdooO0OV3gB+n1bDLNKsQ08Ck+ll0gJd7bQSl1bDKQovOKBBcaAkTsRAUJyqbUTYWgsIk6kyCIwd43e8A59NqOI2l1jARS8GFrp9FB7jgd4DLaTUMUd1swUgQN9ziWthmi+nwmmQzSKYf+mBbP0sOcDVyI8i1JN1uRfCE7EBluzVKcLpHVT/cm0Q/6OLXD5+T6pfGieYQJ3ggciPIteicsNUVGl6/ddv+twQok5Z+OHyShQ1yG0LkAMOyaBxievBT0fg/b25uTvzf01DZe6nsCdf6gYM05/6AA4yUbgS5FJzSsXn+L0T+vnbt2iK5ucPR0NDwGDnBBVf6YeEnydTkQMqUN4JcCRFwk4j4pwOC/0oGfErX+AIUwD3pwgnQZ5r3r2fJfRU2hGgYWJ+lEtT+00TIwyTHLRL82vr16x83Nb6Abf0wLUE/6v+mjB2gOdWNoBA5TPzeDZIxTxMxXyO5bEDu+yTf1JnzZUCdVPc2C/o969ePOOjMkP/tqW4EBZ78NykF/ViQaBpyHyWSWhMS/S7d39HU1PRZ24YPIh8XtCXRD/dCPxr2PxOsr6ys7EHi41xGNmhNdSPI1/Alinw/H0d0fX39g0ReLclODOlEIOKE9+jvtfxnfNeOe2g4/ag7k4cDbarqh77E1UWZ2OeIk/9kYIeuVDeC8nKLOrwwLUMVCoiXSvxfiik7wMupbgTl5RtZk91XQbZ4JmVbvIFG30qxwZ/kXlDMCMW2bdvuIY5+lOIIcAEO8E5KjZ2nnP/jWZPc10HT40PE159SsslVOMDVNBrKLTsylJBfnr+Sgl0uwQH+mEJDK7MmtdBAnNWlMAr8DtHnDx038mLWZBYqiLsdjh/MbjTyJYcNvEZB331ZE1mowH/0SByecOgETTgQ8klq5H8OjP9+RUXFp7MmsdCBPXtw6cD413EWRDTS4cABOjLmrt+AuDzgwAF29TSQHwVsLkX+G3VmyFm/Qk1NzSfAqcWH8x3U2auRuQS6eMtCA7eogaqMuOq3IF7n21gqRh1k6jmhjdDFL5o0QmVv0N/GlLm5Y4CzG4b2uQkbyxpZoDMdUJl/UVBRkxIXdyyI62qd1VuUiXzyQxp5DIGHYnZwjWQ/zSmPOu47I498TNCpaB8cO2unjCz5CSkK5B4hr9lADb1Elfye5O28/Jnk+7iGexz0kaEAOALZ5sskR7Gpl/+Bz3/p729IjpGsIxsNyFpPBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoNhG/8Hx4NP1RkDIwoAAAAASUVORK5CYII=',
                Type.Hobby
            ),
            new About(
                'Computer Science',
                'https://img.shields.io/badge/Computer_Science-CC6699?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFklEQVR4nO2dv4skRRTH6zKNVITD5PAHu5guGE5wuQaXGZnsBaLBcoEGCwfHgIlc5IKCCjfZ/AEbCMKGGy0YGRh5sIkGMuGlovUYh2tr3lTVbNV2VVd9PvBNbt+7qar+MLPV29NtDAAAAAAAAMAoHNgsnJwEes6UHh/HSv2Rp/5IqT8OvIZbfxaoP1F6DgI9TTKz+cfJeaBnpfT4WCj1Dzz1D5T6kGRu/SpQf670zAI9TYIACIAABgEQwCAAAgR6mgQBEAABDAIggEEABAj0NAkCIAACGARAAIMACBDoaRIEQAAEMAiAAKZxAQ5tHio5tbl0stxRu8mF0uOrXyj1c0/9XKlfBF7Drb8I1C+VntMdtYd7r3aFyERc40lcHt5gvasDARCg+EJONQjQeZoV4MrmKflfrpR1Ki6AXK48S4z8hutO7OmYk5gIsibuOsnapa5/0iXn2j5631wq/4YA22gCaGu3b0LnMbyMLcAdmzdTBjxhuhdADr58q+ba5t2UQU+UrgXYHPzNz69NfxJUKYB8j+08MUtlUEMB3IPfqwSaALJ2qesf+r7lraNtA4cCyGf+c6VG8tmoIy2LJkDxbWAOQgII92x+d2oejzjGGuhaAGEoQW8HX+heAEEk6OltfwgCFOBDm08z5BOb+zavJowFAQrws0nfZg3zwuY7m7s3GAsCFCC3AJv8YfPBnmOpUgDZn68SI5dI9SaA5C+bd/YYiyaArF3q+ofuWeSl9T8G3aYAktBFrkOqPBPYugDyFvt1hnxv1m/72vzfjxwLAkyc12x+M9tzfRTZjwAN8LnZnus3kb1VCpCDmncBudG+WPIssrfKXUAOECAOBGgABFBAgDgQoAEQQAEB4kCABmhOAO1++zcJAoTRBMix9qHnHXjhRNB+5Bag+IkgBNgPBIicBAJsgwAN0JwAR/9NKiVzZVAIsI0mwNykr7/vIVmjwDYwjiq3gTlAgDgQoAEQQAEB4kAAhSc2vzi5fwtjzMXrZn05+DBvR/YigMIzpdd3q9cpU6UApbeBvQswN4W3gaVPBPUuQPETQQgwHgiggAAIgACJSRKg9AUhvQtQ/IKQHLANjKPKbWAOECAOBFBAgAZAgDgQQAEBGgAB4kAABQQoDCeCxqPKE0EIMB4IoPCj0vtxyoQqBgEUvlJ6f0iZUMVUKUDpG0V+pPT+bdaXir1n80aG1EKVN4rMQcou4BWbP5X+nKmFKncBOUi9KvhY6UeACZHjsvBvlf8DASZCru8FfGHWt2OfsgDyMIx7O36GABG8ZfOlzU82v5r1w6ZSMxYisMz92uhPQ0OAhtkc/E2uzbYECNAo8ravffTIu8/wMblVCjDGgyNbR3sknkRuMX9nUFflgyNLnwlsBVcC9+ALVZ4JRIB8bCTQDr6AAB0gn/nawRcQoHOqFODAZpaYU2VQCLCNJoCsXer6H4w5CQ1tG3hl1hMmL3OlrFPxbWAONAFIXBCg8yBA50GAztOEAIdmPRE38hvupZPljtpNLpQeX/1CqZ976udK/SLwGm79RaB+qfSc7qg93Hu1J4RsUVzjQ8/aXSk9PrTzGL7LyrX7/IX20W79KlB/rvTMAj1NggAIgAAGARDAIAACBHqaBAEQAAEMAiCAQQAECPQ0CQIgAAIYBEAAgwAIEOhpEgRAAAQwCIAAplMB5HJl9972oe+xnSk9PrTnHfgeonSk1Ifut+/Wh+7Jc6L0FL90GwAAAAAAALrgX6GTTq++tzCcAAAAAElFTkSuQmCC',
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
