import React from 'react'
import { Button, Heading,Header2, Header3,HeadingInverse,ContentThemes, Subtitle ,Content, Header,Heading1, NavbarContent, NavbarMobileContent, ContentWhite, ContentHtml, ContentHtmlEllipse, Span, FooterLink} from './QTextStyle'
import { useTranslation } from 'react-i18next';

const QText = props => {
    const { tx, text, children, type, style } = props
    const { t } = useTranslation();
    const i18nText = tx && t(tx)
    const contentTrans = text || children
    const content = tx ? i18nText || contentTrans : contentTrans


        const validate = () => {
            switch(type) {
                case 'h1':   return <Heading style={style} numberoflines={props.numberOfLines}>{content}</Heading>;
                case 'h1_inverse':   return <HeadingInverse style={style} numberoflines={props.numberOfLines}>{content}</HeadingInverse>;
                case 'h41':   return <Heading1 style={style} numberoflines={props.numberOfLines}>{content}</Heading1>;
                case "h2":   return <Subtitle style={style} numberoflines={props.numberOfLines}>{content}</Subtitle>;
                case "h3": return <Content style={style} numberoflines={props.numberOfLines}>{content}</Content>;
                case "p":  return <Subtitle style={style} numberoflines={props.numberOfLines}>{content}</Subtitle>;
                case "b":  return <Button style={style} numberoflines={props.numberOfLines}>{content}</Button>;
                case 'head':   return <Header style={{style}} numberoflines={props.numberOfLines}>{content}</Header>;
                case 'nav' : return <NavbarContent style={{style}} numberoflines={props.numberOfLines} onClick={props.onClick}>{content}</NavbarContent>;
                case 'footer' : return <FooterLink style={{style}} numberoflines={props.numberOfLines} onClick={props.onClick} to={props.to} key={props.key}>{content}</FooterLink>;
                case 'navmobile' : return <NavbarMobileContent style={{style}} numberoflines={props.numberOfLines} onClick={props.onClick}>{content}</NavbarMobileContent>;
                case "content_white":   return <ContentWhite style={style} numberoflines={props.numberOfLines}>{content}</ContentWhite>;
                case "html":   return <ContentHtml style={style} numberoflines={props.numberOfLines}  dangerouslySetInnerHTML={{ __html: content }}></ContentHtml>;
                case "htmlinverse":   return <ContentHtmlEllipse style={style} numberoflines={props.numberOfLines}  dangerouslySetInnerHTML={{ __html: content }}></ContentHtmlEllipse>;
                case 'head2':   return <Header2 style={style} numberoflines={props.numberOfLines}>{content}</Header2>;
                case 'head3':   return <Header3 style={style} numberoflines={props.numberOfLines}>{content}</Header3>;
                case 'themes':   return <ContentThemes style={style} numberoflines={props.numberOfLines}>{content}</ContentThemes>;


                case "s":  return <Span style={style} numberoflines={props.numberOfLines}>{content}</Span>;

                default:   return <Subtitle style={style} numberoflines={props.numberOfLines}>{content}</Subtitle>;
            }    
        }
    
        return (
       <>
       {validate()}</>
        )
      }



export default QText;