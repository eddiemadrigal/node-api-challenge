import React, { useEffect } from 'react';
import axios from 'axios';

const Projects = () => {

  useEffect(() => {
    axios
      .get('localhost:5000/api/projects/1')
      .then( res => {
        console.log("data: ", res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <h1>
      My Projects

    </h1>
  )
}

export default Projects;