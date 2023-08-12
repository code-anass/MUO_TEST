import React from 'react';
import "./theme.css";

import { useState } from 'react';
import { Section, ContainerWrapper, Span, Image, Bold, Button, TabBlock, Content } from './ThemeStyle';


let data = ["https://portaldev.planmalaysia.gov.my/portal/sharing/rest/content/items/ed700c43a2554325a527347438f151ca/resources/images/widget_78/1667893129404.png", "https://portaldev.planmalaysia.gov.my/portal/sharing/rest/content/items/ed700c43a2554325a527347438f151ca/resources/images/widget_78/1667893129404.png", "https://portaldev.planmalaysia.gov.my/portal/sharing/rest/content/items/ed700c43a2554325a527347438f151ca/resources/images/widget_78/1667893129404.png", "https://portaldev.planmalaysia.gov.my/portal/sharing/rest/content/items/ed700c43a2554325a527347438f151ca/resources/images/widget_78/1667893129404.png", "https://portaldev.planmalaysia.gov.my/portal/sharing/rest/content/items/ed700c43a2554325a527347438f151ca/resources/images/widget_78/1667893129404.png",]


export const Theme = (props) => {


  const [toggleState, setToggleState] = useState(1);
  const [activeTabs] = useState('tabs active-tabs');
  const [Tabs] = useState('tabs');



  const handleClick = (e, val) => {
    e.preventDefault()
    setToggleState(val)
  }


  return (
    <ContainerWrapper >
      {/* Top Section */}
      <Section >
      </Section>

      {/* Bottom Section */}
      <Section>
        <TabBlock>
          <Button
            className={toggleState === 1 ? activeTabs : Tabs}
            onClick={(e) => handleClick(e, 1)}
          >
            <Bold>{props.t('theme.SubTheme')}</Bold>
          </Button>
          <Button
            className={toggleState === 2 ? activeTabs : Tabs}
            onClick={(e) => handleClick(e, 2)}
          >
            <Bold>{props.t('theme.LinktheSDGs')}</Bold>
          </Button>
        </TabBlock>
        <Content>
          {toggleState === 2 ?

            <Span >
              {data.map((val, index) => (
                <Image key={index}
                  src={val}
                  alt=""
                />
              ))
              }
            </Span>
            : <Span >

            </Span>}
        </Content>
      </Section>

    </ContainerWrapper>

  )
}
