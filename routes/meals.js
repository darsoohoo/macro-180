const express = require('express');
const router = express.Router();
const Item = require('../models/Meal');

router.get('/', async (req, res) => {
    try {
        const items = await Item.find().sort({ date: -1});
        res.json(items);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

router.post('/', (req, res) => {
        const newItem = new Item({
            name: req.body.name,
            calories: req.body.calories,
            protein: req.body.protein,
            carbohydrate: req.body.carbohydrate,
            fat: req.body.fat
        });
        newItem.save().then(item => res.json(item));
})


router.delete('/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
      .then(() => res.send('Item deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.put('/update/:id', (req, res) => {
    Item.findById(req.params.id)
      .then(item => {
        item.name = req.body.name ? req.body.name : item.name;
        item.calories = req.body.calories ? req.body.calories : item.calories;
        item.protein = req.body.protein ? req.body.protein : item.protein;
        item.carbohydrate = req.body.carbohydrate ? req.body.carbohydrate: item.carbohydrate;
        item.fat = req.body.fat ? req.body.fat: item.fat;
        item
          .save()
          .then(() => res.json('Item updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router;