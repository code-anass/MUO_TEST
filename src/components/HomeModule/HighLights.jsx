import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import CauroselComp from '../CauroselComp'
import { TextWrapper, GridMain } from '../HomeContainer/InfoSectionStyles'
import HighLightCard from '../CauroselComp/HighlightCard';
// import HighLightCardNew from '../CauroselComp/HighlightCardNew';

import { isDataAvailable } from '../../utils/OperationUtils'

import AnnouncementSection from './Announcement'
import QText from '../QText/QText';
import  { logError, logInfo } from '../../utils/QLogger';

const HighLights = (state) => {

    const [highLights, setHighLights] = useState([])

    useEffect(() => {

        if (isDataAvailable(state.highlights)) {
            bindResponseToUI(state.highlights);
        }
    }, [state.highlights]);

    const bindResponseToUI = (data) => {
        try {
            setHighLights(data)

            logInfo("HightLights", data);

        } catch (error) {
            logError(error);
        }
    };


    return (
        <>
            {highLights ? (

                <GridMain>
                    <TextWrapper>
                        <QText tx={'home.hightlights'} type='h1'></QText>

                    </TextWrapper>
                    <AnnouncementSection></AnnouncementSection>

                    <CauroselComp key={highLights.length}>
                        {
                            highLights.map((element, index) => {
                                return <HighLightCard key={index + "Highlights"} pos={index} data={element.data} tag="highlights" />
                            })
                        }  </CauroselComp>
                        
                
                </GridMain>
            ) : null}
        </>
    )  

}
 
const mapStateToProps = (state) => ({
   errorResponse: state.notification,
    highlights: state.highlights,
});

export default connect(mapStateToProps)(HighLights);

