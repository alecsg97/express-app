const express = require('express');
const router = express.Router();
const Animal = require('../../models/Animal');

router.post('/create', (req, res, next) => {
    const animalToCreate = {
        ...req.body,
        isMale: !!req.body.isMale,
        isFemale: isMale ? false : !!req.body.isFemale
    }
    console.log({req})

    Animal.create(animalToCreate).then(newlyCreatedAnimal => {
        console.log({newlyCreatedAnimal})

        res.redirect()

    }).catch(err => {
        console.log({err});
    })
    // Animal.create()
    res.redirect('/animals');
})

router.get('/', (req, res, next) => {
    Animal.find()
    .then((animalsFromDb) => {
        console.log({animalsFromDb});

        data = {
            animals: animalsFromDb
        }
    })
    .catch(err => {
        console.log({err})
    })
    res.render('animals/list')
})

router.get('/details/:animalId', (req, res, next) => {
    console.log({params: req.params.animalId})

    Animal.findById(req.params.animalId).then(animalFromDb => {
        console.log({animalFromDb})

        res.render('animals/details', animalFromDb)
    }).catch(err => {
        console.log({err})
    })
})

module.exports = router;