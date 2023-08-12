import { useTranslation } from 'react-i18next';


export default function LanguageChecker() {

    const { i18n } = useTranslation();

    // return  i18n.language || window.localStorage.i18nextLng || '';

    const getCurrentLng = () => i18n.language || window.localStorage.i18nextLng || '';


    return getCurrentLng() === 'en'
}


