import { useState } from "react";
import "./theme.css";
import ImageComp from "../common/ImageComp";

export default function Theme1() {
  const [toggleState, setToggleState] = useState(1);



  const handleClick = (val) => {
    setToggleState(val)
  }

  return (
    <div className="Container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={(e) => handleClick(e, 1)}
        >
          Sub Tema
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={(e) => handleClick(e, 2)}
        >
          Hubungkait SDGs
        </button>
      </div>

      {/* <div className="content-tabs">
        {data.map((val, index) => (
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <ImageComp Image={data} />
          </div>
        ))
        }

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >

        </div>

      </div> */}
    </div>
  );
}


