### Pour lancer l'api en local

Etape 1: Create une db mysql avec le nom tutoring_db

Etape 2: Modifier le fichier ormconfig à la racine et renseigner les coordonnées de connection à votre db locale (username, password, port = 3306 par défaut)
Etape 3: Installer les dépendances du projet en exécutant la commande:

```sh
$ yarn install
```

Etape 4: Démarer le projet

```sh
$ yarn start:dev
```

Une fois le projet démarré vous pouvoir voir la doc de l'api à l'url

```sh
   http://localhost:9900/doc
```
