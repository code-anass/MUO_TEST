/**
 * Author: Anitha Gorli
 * Date: 31-MAR-2023
 */
import React, { useEffect } from 'react';
import Dropdown from './Dropdown';
import './NewsFilter.css'
import { format } from 'date-fns'
import QText from '../../components/QText/QText';


const NewsFilter = ({ t, onFilterSelected }) => {


  const fetchDateTime = () => {
    let date = new Date();
    let weekday = [t('generic.sun'), t('generic.mon'), t('generic.tues'), t('generic.wed'), t('generic.thurs'), t('generic.fri'), t('generic.sat')][date.getDay()]
    return weekday + format(date, ' . dd MMM yyyy ')
  }

  function itemClickEvent(item) {
    onFilterSelected(item)
  }

  return (


    // <div className="d-flex justify-content-center align-items-sm-center flex-column flex-sm-row mb-4" style={{ background: "white", width: "100%", padding: "10px" }}>
    <div className="d-flex justify-content-end align-items-sm-center flex-column flex-sm-row mb-4" style={{ background: "white", width: "100%", padding: "10px", paddingRight:"30px" }}>
      <QText style={{ padding: "10px", marginTop: "25px" }} type='h3'>  {(fetchDateTime())} </QText>
      <QText style={{ padding: "10px", marginTop: "25px" }} type='h3'>{t('generic.filter')}</QText>
      <Dropdown items={['2023', '2022', '2021', '2020']} itemClickEvent={itemClickEvent}></Dropdown>


    </div>




  )
}

export default NewsFilter