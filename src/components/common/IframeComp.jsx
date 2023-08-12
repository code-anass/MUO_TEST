import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {logInfo} from '../../utils/QLogger'

const IframeComponent = (state, props) => {
  const location = useLocation();

  const  {title , nav} = location.state.data;
  const [iframeKey, setIframeKey] = useState(0);


  const reloadIframe = () => {
    // Increment the key to force a reload
    setIframeKey(prevKey => prevKey + 1);
  };

  useEffect(() => {
    const resizeIframe = () => {
      // const iframe = document.getElementById(`${iframeKey}}`);
      const iframe = document.getElementById('myIframe');

      if (iframe) {
        iframe.style.height = window.innerHeight + 'px';
      }
    };

    // reloadIframe();
    const handleResize = () => {
      requestAnimationFrame(resizeIframe);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    resizeIframe();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div >
      <iframe
        id="myIframe"
        key={iframeKey}
        style={{ paddingTop:"60px"}}
        src={nav}
        width="100%"
        title={title}
      ></iframe>
    </div>
  );
};

export default IframeComponent;
