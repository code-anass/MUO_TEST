import React, { useState } from 'react'
import { logInfo } from '../../utils/QLogger';
import {Cardmain, Mainicon, Container, Content, DataCard, TitleDataCard, CardTable, CardTbody, CardTr, CardTd, InfoContent, InfoMoreButton, ContentInsight} from "./InsightCardStyles";
 

const InsightCard = (props) => {
    const {data, t} = props || {};
    const [isClick,setIsClick] = useState(false);
    const [isRead,setRead] = useState("Read More");
    let el=data;

    function setClick() {
        setIsClick(!isClick);
        if(!isClick)
        setRead("Close");
        else
        setRead("Read More");
    }

    function navigateToLink(link) {
        logInfo(link,"LINKING");
        window.open(link);
    } 

    return(
        <Cardmain> 
                <Container>
                <Mainicon style={{height:"200px"}} src={el.image}></Mainicon>
                <DataCard>
                    <TitleDataCard onClick={()=>navigateToLink(el.navigateurl)}>{t(el.title)}</TitleDataCard>
                    {logInfo(el,"element")}
                    <CardTable>
                        <CardTbody style={{fontSize: '13px', width: '100%'}}>
                            <CardTr style={{verticalAlign: 'top'}}>
                                <CardTd style={{width:'30%'}}>
                                    <b><font style={{verticalAlign:"inherit"}}><Content>{t("insightsDetatil.information")} :</Content></font></b>
                                </CardTd>
                                    {el.infointro !== "no" 
                               ?(<CardTd><InfoContent isclick={!isClick}><Content>{t(el.infointro)}</Content></InfoContent>
                                    <InfoContent isclick={!isClick}><Content>...</Content></InfoContent>
                                    <InfoContent isclick={isClick}><Content>{t(el.info)}</Content></InfoContent>
                                    <InfoMoreButton onClick={()=>setClick()}><ContentInsight>{isRead}</ContentInsight></InfoMoreButton></CardTd>)
                                :( <CardTd><InfoContent isclick={true}><Content>{t(el.info)}</Content></InfoContent></CardTd>)}                            
                            </CardTr>
                            <CardTr style={{verticalAlign:'top', height: '25%'}}>
                                <CardTd style={{width:'30%'}}>
                                    <b><font style={{verticalAlign:"top"}}><Content>{t("insightsDetatil.theme")} :</Content></font></b>
                                </CardTd>
                                <CardTd>
                                    <CardTable>
                                        <CardTbody>
                                            {el.theme.map((themes)=>(
                                            <CardTr>
                                                <CardTd style={{verticalAlign:"top"}}>
                                                    <li style={{color:'green'}}></li>
                                                </CardTd>
                                                <CardTd><Content>{t(themes.content)}</Content></CardTd>
                                            </CardTr>
                                            ))}
                                        </CardTbody>
                                    </CardTable>
                                </CardTd>
                            </CardTr>
                            <CardTr style={{verticalAlign:'top', height: '25%'}}>
                            <CardTd style={{width:'30%'}}>
                                    <b><font style={{verticalAlign:"top"}}><Content>{t("insightsDetatil.subtheme")} :</Content></font></b>
                                </CardTd>
                                <CardTd>
                                    <CardTable>
                                        <CardTbody>
                                            {el.subtheme.map((subthemes)=>(
                                            <CardTr>
                                                <CardTd style={{verticalAlign:"top"}}>
                                                    <li style={{color:'#00FF00'}}></li>
                                                </CardTd>
                                                <CardTd><Content>{t(subthemes.content)}</Content></CardTd>
                                            </CardTr>
                                            ))}
                                        </CardTbody>
                                    </CardTable>
                                </CardTd>
                            </CardTr>
                            {el.state 
                            ?(<CardTr style={{verticalAlign: 'top'}}>
                                <CardTd style={{width:'30%'}}>
                                    <b><font style={{verticalAlign:"inherit"}}><Content>{t("insightsDetatil.state")} :</Content></font></b>
                                </CardTd>
                                <CardTd>
                                    <InfoContent isclick={true}><Content>{el.state}</Content></InfoContent>
                                </CardTd>
                            </CardTr>)
                            :""}
                        </CardTbody>
                    </CardTable>
                </DataCard>
                </Container>
        </Cardmain>
    )
}

export default InsightCard;