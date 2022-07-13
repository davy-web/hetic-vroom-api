# Davy

## Commandes utilisés (Terminal)
- npm init -y
- npm install express
- npm install mongoose
- npm install jsonwebtoken
- npm install bcryptjs
- npm install dotenv
- npm install --save-dev nodemon

## Commandes créées (Package.json)
- "scripts": {"start": "nodemon src/server.js"}

## Démarrer le site (Terminal)
````shell
npm install
npm run start
````

## API routes
````shell
https://hetic-vroom-api.one-website.com/

question: {
  name,
  lastname,
  phone,
  mail,
  profil,
  text,
  date
}
/questions/get              (liste des questions)
/questions/get/:id          (obtenir une question à partir d'un id)
/questions/create           (ajouter une question)
/questions/update/:id       (mettre à jour une question à partir d'un id)
/questions/delete/:id       (supprimer une question à partir d'un id)

driver: {
  name,
  lastname,
  datephone,
  mail,
  age,
  photo_driver,
  photo_permis,
  casier_judiciaire
}
/drivers/get                (liste des conducteurs)
/drivers/get/:id            (obtenir un conducteur à partir d'un id)
/drivers/create             (ajouter un conducteur)
/drivers/update/:id         (mettre à jour un conducteur à partir d'un id)
/drivers/delete/:id         (supprimer un conducteur à partir d'un id)

car: {
  car_id,
  photo_car,
  kilometrage,
  date_dernier_revision,
  nombre_place_voiture,
  chaise_bebe
}
/cars/get                   (liste des voitures)
/cars/get/:id               (obtenir un voiture à partir d'un id)
/cars/create                (ajouter un voiture)
/cars/update/:id            (mettre à jour un voiture à partir d'un id)
/cars/delete/:id            (supprimer un voiture à partir d'un id)

user: {
  email,
  password,
  name,
  lastname,
  token
}
/authentication/login       (connexion)
/authentication/register    (inscription)
````