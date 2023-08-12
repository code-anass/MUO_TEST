/**
 * Author: Anitha Gorli
 * Date: 31-MAR-2023
 */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ImageComp from '../../components/common/ImageComp';
import TextWithUnderline from '../../components/common/TextWithUnderline';
import QText from '../../components/QText/QText'
import {NewsMainCard, CardBackground} from './NewsCardStyles'

import './News.css'
import { ROUTE_NEW_DETAIL } from '../../utils/Constants';
import { ButtonOption } from '../Search/SearchStyle';
import LanguageChecker from '../../utils/LanguageChecker';


const NewsCard = (props) => {
  const { obj } = props || {}
  const { desc_1, desc_my, title_my, title, image , order} = obj.data || {}

  const isEnglish = LanguageChecker();

  // const [Desc_1,setDesc_1] = useState(desc_1);
  // const [Title, setTitle] = useState(title);

  // if (isEnglish) {
  //   setTitle(title);
  //   setDesc_1(desc_1);
  // }
  // else
  // {
  //   setTitle(title_my);
  //   setDesc_1(desc_my);
  // }


  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`${ROUTE_NEW_DETAIL}?id=${id}`, {state: {data: obj.data}});
  };
  
  return (
    <div
      className="col-md-2 col-sm-4 wow fadeInRight animated"
      style={{ visibility: "visible", background: "white" }}
    >
      <NewsMainCard>

        <ImageComp image={image}></ImageComp>

        <CardBackground style={{minHeight: 450}}>

          {isEnglish ? (<>
          <TextWithUnderline text={title} onClick={()=>{ handleItemClick(order)}}></TextWithUnderline>
         
          <QText type="htmlinverse" tx={desc_1}/></>) 
          :(<><TextWithUnderline text={title_my} onClick={()=>{ handleItemClick(order)}}></TextWithUnderline>
         
          <QText type="htmlinverse" tx={desc_my}/></>) }
        </CardBackground>
      </NewsMainCard>
    </div>



  )
}

export default NewsCard