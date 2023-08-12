import React from 'react'

import './ModuleGridStyles.css';

import GridItem from './GridItem'
import GridRecord from './GridRecord'


import { modulesData } from '../../data/ModulesData'

const classStyle = [
  "gridy-2 gridyhe-1 wow fadeInLeft animated",
  "gridy-1 gridyhe-1 wow fadeInRight animated",
  "gridy-1 gridyhe-1 wow fadeInLeft animated",
  "gridy-2 gridyhe-1 wow fadeInRight animated",
  "gridy-1 gridyhe-1 wow fadeInLeft animated",
  "gridy-1 gridyhe-1 wow fadeInUp animated",
  "gridy-1 gridyhe-1 wow fadeInRight animated",
  "gridy-3 gridyhe-1 wow fadeInUp animated"
]

const classStyleNA = [
  "gridy-2 gridyhe-1 wow ",
  "gridy-1 gridyhe-1 wow ",
  "gridy-1 gridyhe-1 wow ",
  "gridy-2 gridyhe-1 wow ",
  "gridy-1 gridyhe-1 wow ",
  "gridy-1 gridyhe-1 wow ",
  "gridy-1 gridyhe-1 wow ",
  "gridy-3 gridyhe-1 wow "
]

const ModuleSection = () => {

  
  return (

    <div className="gridywrap">
      {modulesData.map((el, index) => (
        <GridRecord key={index+"Modules"} pos={index} data={el} class={ classStyleNA[index]} classA={ classStyle[index]} useLocal ={true}> 

          <GridItem key={index + "Modules inner"} data={el} btnTitle={"GO"}>

          </GridItem>

        </GridRecord>
      ))}
    </div>



  )
}

export default ModuleSection