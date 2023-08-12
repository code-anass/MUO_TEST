/**
 * Author: Amit
 * Date: 26-APR-2023
 */
import React, { useState } from 'react'

import { DropdownWrapper, DropDownItem, Select, Option, SelectDownload } from './DropdownCompStyles'
import QText from '../QText/QText'
import { useEffect } from 'react';
import ContactUsLeft from '../../pages/ContactUs/ContactUsLeft';
import { logInfo } from '../../utils/QLogger';

export default function DropdownComp(props) {

      const [item, setItem] = useState()

      useEffect(() => {
            // debugger

            if (props.value === "") {
                  setItem(props.dropdownList[0].title);
                  logInfo(props.dropdownList[0], "InsideDropComp")
            }

            if (props.reset === true) {
                  setItem(props.dropdownList[0].title);
            }
      }, [props.value]);


      const onDropdownClick = (e) => {
            // debugger
            e.preventDefault()
            setItem(e.target.value.title)
            logInfo(e.target.value, "FilterOption");
            props.onItemClick(e.target.value)
      }



      return (
            <>
                  {

                        props.download == true ? (
                              <SelectDownload
                                    id="ecom-filter-license"
                                    name="ecom-filter-license"
                                    size={1}
                                    value={item}
                                    onChange={(e) => onDropdownClick(e)}
                                    defaultValue={'Please Choose item'}
                              >
                                    {
                                          props?.dropdownList?.map((value, index) => (
                                                <Option
                                                      value={JSON.stringify(value)} key={index}>
                                                      <QText tx={value.title}>
                                                      </QText>
                                                </Option>

                                          ))
                                    }

                              </SelectDownload>
                        ) :



                              props.stylesSelect ? (
                                    <Select
                                          id="ecom-filter-license"
                                          name="ecom-filter-license"
                                          size={1}
                                          value={item}
                                          onChange={(e) => onDropdownClick(e)}
                                          defaultValue={'Please Choose item'}
                                    >
                                          {
                                                props?.dropdownList?.map((value, index) => (
                                                      <Option
                                                            value={JSON.stringify(value)} key={index}>
                                                            <QText tx={value.title}>
                                                            </QText>
                                                      </Option>

                                                ))
                                          }

                                    </Select>
                              ) : (
                                    <DropdownWrapper
                                          id="ecom-filter-license"
                                          name="ecom-filter-license"
                                          size={1}
                                          value={item}
                                          style={props.style}
                                          onChange={(e) => onDropdownClick(e)}
                                    >
                                          {
                                                props?.dropdownList?.map((value, index) => (
                                                      <DropDownItem
                                                            value={JSON.stringify(value)} key={index}>
                                                            <QText tx={value.title}>{value.title}
                                                            </QText>
                                                      </DropDownItem>

                                                ))
                                          }

                                    </DropdownWrapper>
                              )
                  }
            </>
      )
}

