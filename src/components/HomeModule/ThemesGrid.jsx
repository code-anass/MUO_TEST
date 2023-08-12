import React from 'react'

import './ModuleGridStyles.css';
import { themesData } from '../../data/ThemesData'
import GridItem from './GridItem'
import GridRecord from './GridRecord'


const classStyle = [
  "gridy-1 gridyhe-1 wow fadeInLeft animated",
  "gridy-2 gridyhe-1 wow fadeInRight animated",
  "gridy-1 gridyhe-1 wow fadeInLeft animated",
  "gridy-1 gridyhe-1 wow fadeInUp animated",
  "gridy-1 gridyhe-1 wow fadeInRight animated",
]

const classStyleNA = [
  "gridy-1 gridyhe-1 wow ",
  "gridy-2 gridyhe-1 wow ",
  "gridy-1 gridyhe-1 wow ",
  "gridy-1 gridyhe-1 wow ",
  "gridy-1 gridyhe-1 wow ",
]
const ThemesSection = () => {
  return (

  
<div className="gridywrap">
      {themesData.map((el, index) => (
        <GridRecord key={index+"Themes"} pos={index} data={el} class={ classStyleNA[index]} classA={ classStyle[index]} useLocal ={false}> 

          <GridItem key={index + "Themes inner"} data={el} btnTitle={"More Details"}>

          </GridItem>

        </GridRecord>
      ))}
    </div>


  )
}

export default ThemesSection