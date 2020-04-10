const express = require('express');
const Actions = require('../data/helpers/actionModel');
const router = express.Router();

router.get('/', (req, res) => {
  Actions.get(req.query)
    .then( action => {
      res.status(200).json({ action })
    })
    .catch( err => {
      console.log( err );
      res.status(500).json({
        message: "Error retrieving actions"
      });
    });
});

// Create an action
router.post('/', (req, res) => {
  Actions.insert(req.body)
    .then( action => {
      res.status(201).json(action)
    })
    .catch( err => {
      console.log( err );
      res.status(500).json({
        message: 'Error adding the action.'
      });
    });
});

// Read action for a given id
router.get('/:id', (req, res) => {
  Actions.get(req.params.id)
    .then( action => {
      if ( action ) {
        res.status(200).json( action );
      } else {
        res.status(404).json({ message: "Action not found" });
      }
    })
    .catch( err => {
      console.log( err );
      res.status(500).json({
        message: 'Error retrieving the specific action'
      });
    });
});

// Update a given action
router.put('./:id', (req, res) => {
  const changes = req.body;
  Actions
    .update(req.params.id, changes)
    .then( action => {
      if ( action ) {
        res.status(200).json( action )
      } else {
        res.status(404).json({
          message: 'The action could not be found'
        })
      }
    })
    .catch( err => {
      console.log( err );
      res.status(500).json({
        message: 'Error updating the action'
      });
    }) ;
});

// Delete an action
router.delete('/:id', (req, res) => {
  Actions
    .remove(req.params.id)
    .then( count => {
      if (count > 0 ) {
        res.status(200).json({ 
          message: 'The action has been removed'
        })
      } else {
        res.status(404).json({
          message: 'The action could not be found'
        })
      }
    })
    .catch( err => {
      console.log( err );
      res.status(500).json({
        message: 'Error removing the action'
      })
    })
})

module.exports = router;