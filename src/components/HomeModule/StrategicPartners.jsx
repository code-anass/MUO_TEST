import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { isDataAvailable } from '../../utils/OperationUtils'

import { TextWrapper, GridMain } from '../HomeContainer/InfoSectionStyles'
import PartnerCard from '../CauroselComp/PartnerCard'
import Carousel from "react-elastic-carousel";

import QText from '../QText/QText';
import { props } from 'ramda';
import { logInfo } from '../../utils/QLogger';
import { useRef } from 'react';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
];


const StrategicPartners = (state) => {
    const [strategicPartners, setStrategicPartners] = useState([])

    let str = strategicPartners
    str = strategicPartners.length > 0 && str.push(strategicPartners[0])

    let resetTimeout;
    const carouselRef = useRef(null);

    useEffect(() => {

        if (isDataAvailable(state.strategicPartners)) {
            bindResponseToUI(state.strategicPartners);
        }
    }, [state.strategicPartners]);

    const bindResponseToUI = (data) => {
        try {
            setStrategicPartners(data)
            logInfo(data, "Response---strategicPartners", strategicPartners)


        } catch (error) {
            logInfo(error);
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
        <> {strategicPartners && strategicPartners.length > 0 ? (
            <GridMain>

                <TextWrapper id="homepartners">
                    <QText tx={'home.stategic_partners'} type='h1'></QText>
                </TextWrapper>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <Carousel
                        breakPoints={breakPoints}
                        ref={carouselRef}
                        enableAutoPlay={true}
                        autoPlaySpeed={1500}
                        showArrows={false}
                        pagination={false}
                        //  itemsToShow={2}
                        onNextEnd={({ index }) => {
                            clearTimeout(resetTimeout)
                            // if (index + 1 === breakPoints.itemsToShow + 1) {
                            resetTimeout = setTimeout(() => {
                                carouselRef?.current?.goTo(0)
                            }, 1000) // same time
                            // }
                        }}
                    >
                        {
                            strategicPartners.map((element, index) => {
                                return <PartnerCard key={index + "StrategicParent"} pos={index} obj={element.data} tag="strategicPartners" onClick={onItemClick} />
                            })
                        }

                    </Carousel>
                </div>
            </GridMain>
        ) : null}
        </>
    )
}

const mapStateToProps = (state) => ({
    errorResponse: state.notification,
    strategicPartners: state.strategicPartners,
});

export default connect(mapStateToProps)(StrategicPartners);



