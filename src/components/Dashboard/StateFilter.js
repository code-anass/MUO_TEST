/**
 * Author: Amit
 * Date: 15-MAY-2023
 */
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { StateList } from '../../data/DashboardData';
import { HoverDiv, List, PointerDiv, Span } from './DashboardStyle';

export default function StateFilter(props) {
      const [isHover, setHover] = useState(false)
      return (
            <div onMouseLeave={() => setHover(false)}>
                  <HoverDiv >
                        <PointerDiv onMouseOver={() => setHover(true)}>{props.t("dashboard.SelectState")}</PointerDiv>
                        <List />

                        {isHover &&
                              <React.Fragment>
                                    {props.data?.map((val, i) => (
                                          <motion.span
                                                initial={{
                                                      opacity: 0,
                                                }}
                                                whileHover={{ color:'red' }}

                                                animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                                                // exit={{ opacity: 1 }}
                                                transition={{ duration: 0.2, delay: i * 0.1 / 2 }} key={i} >
                                                <Span onClick={() => props.handleShowAlert(true)}>
                                                      {val}
                                                      <List />
                                                </Span>
                                          </motion.span>
                                    ))
                                    }
                              </React.Fragment>
                        }

                  </HoverDiv>
            </div>
      );
}
