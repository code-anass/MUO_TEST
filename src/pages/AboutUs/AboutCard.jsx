import React from 'react';
import '../../pages/W3Content//W3CStyles.css'
import { LineDivider, TextLines, TextLinesHeader, Row } from '../../pages/W3Content/W3CStyles'
import { ImageWithTitle, ImageTitle, ImageCard, ImageContainer } from '../AboutUs/AboutNSCPStyles'
import { useTranslation } from 'react-i18next';
import { Brightness1 } from '@mui/icons-material';
import { RightCont } from '../AboutUs/AboutUsStyles';
import { Grid } from '@mui/material'


const AboutCard = (props) => {
    const { obj, dividerHidden } = props || {};
    const { t } = useTranslation();


    const { title, data, listStyle, startIndex, stylegrid, imagedata } = obj || {}


    return (
        <div>
            <RightCont id={title + ""} style={{ visibility: "visible" }}>

                <RightCont
                    className="subheading wow fadeInDown animated"
                    style={{ visibility: "visible", color: "black" }}
                >
                    {t(title)}<br/>
                </RightCont>

                <div style={{ color: "black" }}>

                    {data.map((el, index) => (
                        <Row key={index + title}>
                            {listStyle && listStyle === 'buleten' && index >= startIndex &&
                                <Brightness1 style={{ margin: "11px", color: "black", width: "8px", height: "8px" }} fontWeight={200} color={"black"} width={10} height={10} size={10}></Brightness1>
                            }
                            <TextLines dangerouslySetInnerHTML={{ __html: t(el.content) }}>

                            </TextLines>
                        </Row>

                    ))}

                    {stylegrid && stylegrid === 'image' &&
                        <Grid container direction="row"
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            spacing={4}>
                            {imagedata.map((element, index) => (
                                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                                    <ImageWithTitle key={index + title}>
                                        <ImageCard src={element.imageurl} ></ImageCard>
                                        <ImageTitle dangerouslySetInnerHTML={{ __html: t(element.imagedesc) }}></ImageTitle>
                                    </ImageWithTitle>
                                </Grid>
                            ))}
                        </Grid>
                    }


                </div>
            </RightCont>
        </div>

    )
}

export default AboutCard