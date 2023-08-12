import React from 'react';
import '../../pages/W3Content//W3CStyles.css'
import { LineDivider, TextLines, TextLinesHeader, Row } from '../../pages/W3Content/W3CStyles'
import { useTranslation } from 'react-i18next';
import { MdCheckCircleOutline } from 'react-icons/md';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { Brightness1 } from '@mui/icons-material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const GenericCard = (props) => {
  const { obj, dividerHidden } = props || {};
  const { t } = useTranslation();


  const { title, data,listStyle,startIndex } = obj || {}


    return (
      <div>
        <div id={title + ""} style={{ visibility: "visible" }}
        >

          <TextLinesHeader
            className="subheading wow fadeInDown animated"
            style={{ visibility: "visible" }}
          >
            {t(title)}
          </TextLinesHeader>

          <div style={{ color: "black" }}>

            {data.map((el, index) => (
              <Row key={index + title}>
                {listStyle && listStyle === 'circleTick' && index >= startIndex &&
                  <CheckCircleOutlinedIcon style={{ margin: "5px", color: "green", width: "18px", height: "18px", opacity: "0.5" }} fontWeight={200} color={"green"} width={10}
                    height={10} size={10}></CheckCircleOutlinedIcon>

                }
                {listStyle && listStyle === 'buleten' && index >= startIndex &&
                  <Brightness1 style={{ margin: "11px", color: "black", width: "8px", height: "8px" }} fontWeight={200} color={"black"} width={10} height={10} size={10}></Brightness1>
                }
                <TextLines dangerouslySetInnerHTML={{ __html: t(el.content) }}>

                </TextLines>
              </Row>

            ))}

          </div>
          {!dividerHidden &&
            (<LineDivider />)}
        </div>
      </div>

    )
}

export default GenericCard