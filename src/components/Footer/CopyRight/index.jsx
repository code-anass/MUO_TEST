import React from 'react'
import { CopyRight, CRLeftText, CRRightText } from './CopyRight'
import { useTranslation } from 'react-i18next';

const CRView = (props) => {

    let { t } = useTranslation();

    const navigateToPlanMalaysia = () => {
        // Navigate to Plan Malesia Portal
        props.onClick();

    }

    return (
        <CopyRight>
            <CRLeftText>{t('copyRight.text')} </CRLeftText>
            <CRRightText onClick={() => navigateToPlanMalaysia}>
            {t('copyRight.PLANMalaysia')} 
            </CRRightText>
        </CopyRight>
    )
}

export default CRView