// import React from 'react'
import * as React from "react";

import './ModuleGridStyles.css';
import GridItem from './GridItem'
import GridRecord from './GridRecord'

import { insightsData } from '../../data/InsightsData'


const classStyle = [
  "gridy-2 gridyhe-1 wow fadeInLeft animated",
  "gridy-1 gridyhe-1 wow fadeInRight animated",
  "gridy-1 gridyhe-1 wow fadeInLeft animated",
  "gridy-2 gridyhe-1 wow fadeInRight animated",
  "gridy-1 gridyhe-1 wow fadeInRight animated",
]
const classStyleNA = [
  "gridy-2 gridyhe-1 wow",
  "gridy-1 gridyhe-1 wow",
  "gridy-1 gridyhe-1 wow",
  "gridy-2 gridyhe-1 wow",
  "gridy-1 gridyhe-1 wow",
]
const InsightsSection = () => {
 

 
  return (
    <div className="gridywrap justify-content-md-center">
    
       {insightsData.map((el, index) => (
        <GridRecord key={index+"Insights"} pos={index} data={el} class={ classStyleNA[index]} classA={ classStyle[index]} useLocal ={true}> 

          <GridItem key={index + "Insights inner"} data={el} btnTitle={"GO"}>

          </GridItem>

        </GridRecord>
      ))}
 </div>
  )
}

export default InsightsSection