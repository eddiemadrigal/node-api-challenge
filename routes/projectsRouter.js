const express = require('express');
const Projects = require('../data/helpers/projectModel');
const router = express.Router();

router.get('/', (req, res) => {
  Projects.getProjectActions(req.query)
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

// Create a project
router.post('/', (req, res) => {
  Projects.insert(req.body)
    .then( action => {
      res.status(201).json(action)
    })
    .catch( err => {
      console.log( err );
      res.status(500).json({
        message: 'Error adding the project.'
      });
    });
});

// Read project 
router.get('/:id', (req, res) => {
  Projects.get(req.params.id)
    .then( project => {
      if ( project ) {
        res.status(200).json( project );
      } else {
        res.status(404).json({ message: "Project not found" });
      }
    })
    .catch( err => {
      console.log( err );
      res.status(500).json({
        message: 'Error retrieving the specific project'
      });
    });
});

// Update a given project
router.put('./:id', (req, res) => {
  const changes = req.body;
  Projects
    .update(req.params.id, changes)
    .then( action => {
      if ( action ) {
        res.status(200).json( action )
      } else {
        res.status(404).json({
          message: 'The project could not be found'
        })
      }
    })
    .catch( err => {
      console.log( err );
      res.status(500).json({
        message: 'Error updating the project'
      });
    }) ;
});

// Delete an action
router.delete('/:id', (req, res) => {
  Projects
    .remove(req.params.id)
    .then( count => {
      if (count > 0 ) {
        res.status(200).json({ 
          message: 'The projectt has been removed'
        })
      } else {
        res.status(404).json({
          message: 'The project could not be found'
        })
      }
    })
    .catch( err => {
      console.log( err );
      res.status(500).json({
        message: 'Error removing the project'
      })
    })
})

module.exports = router;