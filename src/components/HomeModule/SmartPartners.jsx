import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { isDataAvailable } from '../../utils/OperationUtils'

import { TextWrapper, GridMain } from '../HomeContainer/InfoSectionStyles'
import PartnerCard from '../CauroselComp/PartnerCard'
import Carousel from "react-elastic-carousel";
import QText from '../QText/QText';

import '../HomeModule/ModuleGridStyles.css'
import { logError, logInfo } from '../../utils/QLogger';
import { useRef } from 'react';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 6 },
];


const SmartPartners = (state) => {
    const [smartPartners, setSmartPartners] = useState([])

    let resetTimeout;
    const carouselRef = useRef(null);


    useEffect(() => {

        if (isDataAvailable(state.smartPartners)) {
            bindResponseToUI(state.smartPartners);
        }
    }, [state.smartPartners]);

    const bindResponseToUI = (data) => {
        try {
            setSmartPartners(data)
            logInfo(data, "Response---smartPartners", smartPartners)


        } catch (error) {
            logError(error);
        }
    };
    const onItemClick = (link) => {
        try {
            logInfo("Clicked on Item", link)

        } catch (error) {
            logInfo(error);
        }
    };

    return (
        <> {smartPartners && smartPartners.length > 0 ? (
            <GridMain>
                <TextWrapper>
                    <QText tx={'home.smart_partners'} type='h1'></QText>
                </TextWrapper>
                <Carousel  breakPoints={breakPoints} pagination={true} showArrows={false} enableAutoPlay={true}

                    ref={carouselRef}
                    onNextEnd={({ index }) => {
                        clearInterval(resetTimeout)
                            resetTimeout = setTimeout(() => {
                                carouselRef?.current?.goTo(0)
                            }, 2200) // same time
                    }}
                >
                    {
                        smartPartners.map((element, index) => {
                            return <PartnerCard key={index + "SmartParent"} pos={index} obj={element.data} tag="smartPartners" onClick={onItemClick} />
                        })
                    }

                </Carousel>
            </GridMain>
        ) : null}
        </>
    )
}

const mapStateToProps = (state) => ({
    errorResponse: state.notification,
    smartPartners: state.smartPartners,
});

export default connect(mapStateToProps)(SmartPartners);



