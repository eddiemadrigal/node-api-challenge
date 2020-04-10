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

module.exports = router;