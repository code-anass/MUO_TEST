import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {  ChatBubble } from '@mui/icons-material';
import {Helmet} from "react-helmet";

import Fab from '@mui/material/Fab';



const RightSpace = styled.div`
position: fixed;
bottom: 50px;
right: 15px;
z-index: 3;
`;

export const Chat = () => {




  useEffect(
    () => {
      },
    []
  );

  return (
    <>
  
 <RightSpace >
<Fab color="primary" size="large" aria-label="add">
  <ChatBubble />
</Fab>
<Helmet>

</Helmet>
</RightSpace>
   
    </>
  );
};