import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Projects.css';

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
    <div>
      <h2 className="center">List of Projects</h2>
    </div>
  )
}

export default Projects;