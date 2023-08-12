/**
 * Author: Amit
 * Date: 28-APR-2023
 */

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';


import { Button, ErrorText, Icon, Input, SearchBox, Span } from './SearchCompStyle'

import SearchIcon from '@mui/icons-material/Search';
import QText from '../QText/QText';
import { logInfo } from '../../utils/QLogger';
import {  useEffect } from 'react';


import { CollectionsOutlined } from '@mui/icons-material';

export default function SearchComp(props) {
      const [item, setItem] = useState(props.value || '');
      const [formErrors, setFormErrors] = useState(false);
      const errors = {}
      const { t } = useTranslation();
      let text="Hero.search"

      useEffect(() => {
            setItem(props.value);
      },[props.value]);



      // if(props.onDropdownClick == true)
      // {
      //       var input = document.getElementById("myInput");
      //       input.value = "";
      // }
      

      const handelSearch = async () => {
            if (item.trim().length === 0 || item.length === undefined || item.length === null) {
                  errors.item = "Please enter Valid Input";
                  setFormErrors(true)
                  alert(errors.item)
                  logInfo(errors);
                  props.onItemClick(item);
            } else {
                  props.onItemClick(item);
                  //alert(item)
            }
      }

      const handleOnChange = (e)=>{
            e.preventDefault()
                  setItem(e.target.value)
            if(e.target.value === ''){
                  props.onItemClick(e.target.value);
            } else{
                 // setItem(e.target.value)
                  // props.onItemClick(item);


            }

      }
      return (

            <SearchBox>

                  <Input id="myInput" placeholder={t("insightsDetatil.search")} value={item} onChange={(e) => handleOnChange(e)} />
                  {formErrors === true && <ErrorText> {errors.item}</ErrorText>}
                  <Button
                        onClick={handelSearch}
                  >
                        <Span>
                              <Icon>
                                    <SearchIcon />
                              </Icon>
                              {/* <QText type="b" tx={"Hero.search"}>
                                    </QText> */}
                              {t(text)}
                        </Span>
                  </Button>
            </SearchBox>

      )
}
